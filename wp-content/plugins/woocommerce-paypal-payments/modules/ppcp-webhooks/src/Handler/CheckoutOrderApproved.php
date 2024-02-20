request.
	 *
	 * @param \WP_REST_Request $request The request.
	 *
	 * @return \WP_REST_Response
	 */
	public function handle_request( \WP_REST_Request $request ): \WP_REST_Response {
		$order_id = isset( $request['resource']['id'] ) ? $request['resource']['id'] : null;
		if ( ! $order_id ) {
			return $this->failure_response(
				sprintf(
					'No order ID in webhook event %s.',
					$request['id'] ?: ''
				)
			);
		}

		$order = $this->order_endpoint->order( $order_id );

		$wc_orders = array();

		$wc_order_ids = $this->get_wc_order_ids_from_request( $request );
		if ( empty( $wc_order_ids ) ) {
			$customer_ids = $this->get_wc_customer_ids_from_request( $request );
			if ( empty( $customer_ids ) ) {
				return $this->no_custom_ids_response( $request );
			}

			$customer_id = $customer_ids[0];

			if ( $order->status()->is( OrderStatus::COMPLETED ) ) {
				$this->logger->info( "Order {$order->id()} already completed." );
				return $this->success_response();
			}

			if ( ! (bool) apply_filters( 'woocommerce_paypal_payments_order_approved_webhook_can_create_wc_order', false ) ) {
				return $this->success_response();
			}

			$wc_session = new WC_Session_Handler();

			$session_data = $wc_session->get_session( $customer_id );
			if ( ! is_array( $session_data ) ) {
				return $this->failure_response( "Failed to get session data {$customer_id}" );
			}

			MemoryWcSession::replace_session_handler( $session_data, $customer_id );

			wc_load_cart();
			WC()->cart->get_cart_from_session();
			WC()->cart->calculate_shipping();

			$form = $this->session_handler->checkout_form();
			if ( ! $form ) {
				return $this->failure_response(
					sprintf(
						'Failed to create WC order in webhook event %s, checkout data not found.',
						$request['id'] ?: ''
					)
				);
			}

			$checkout    = new WC_Checkout();
			$wc_order_id = $checkout->create_order( $form );
			$wc_order    = wc_get_order( $wc_order_id );
			if ( ! $wc_order instanceof WC_Order ) {
				return $this->failure_response(
					sprintf(
						'Failed to create WC order in webhook event %s.',
						$request['id'] ?: ''
					)
				);
			}

			$funding_source = $this->session_handler->funding_source();
			if ( $funding_source ) {
				$wc_order->set_payment_method_title( $this->funding_source_renderer->render_name( $funding_source ) );
			}

			if ( is_numeric( $customer_id ) ) {
				$wc_order->set_customer_id( (int) $customer_id );
			}

			$wc_order->save();

			$wc_orders[] = $wc_order;

			add_action(
				'shutdown',
				function () use ( $customer_id ): void {
					$session = WC()->session;
					assert( $session instanceof WC_Session_Handler );

					/**
					 * Wrong type-hint.
					 *
					 * @psalm-suppress InvalidScalarArgument
					 */
					$session->delete_session( $customer_id );
					$session->forget_session();
				}
			);
		} else {
			$wc_orders = $this->get_wc_orders_from_custom_ids( $wc_order_ids );
			if ( ! $wc_orders ) {
				return $this->no_wc_orders_response( $request );
			}
		}

		foreach ( $wc_orders as $wc_order ) {
			if ( PayUponInvoiceGateway::ID === $wc_order->get_payment_method() || OXXOGateway::ID === $wc_order->get_payment_method() ) {
				continue;
			}

			if ( ! in_array( $wc_order->get_status(), array( 'pending', 'on-hold' ), true ) ) {
				continue;
			}

			try {
				$this->order_processor->process( $wc_order );
			} catch ( RuntimeException $exception ) {
				return $this->failure_response(
					sprintf(
						'Failed to process WC order %s: %s.',
						(string) $wc_order->get_id(),
						$exception->getMessage()
					)
				);
			}

			$this->logger->info(
				sprintf(
					'WC order %s has been processed after approval in PayPal.',
					(string) $wc_order->get_id()
				)
			);
		}
		return $this->success_response();
	}
}
