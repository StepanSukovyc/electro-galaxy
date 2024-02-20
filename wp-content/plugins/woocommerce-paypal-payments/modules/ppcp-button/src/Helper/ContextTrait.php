_block( 'woocommerce/checkout' ) ) {
			return 'checkout-block';
		}

		if ( $this->is_checkout() && ! $this->is_paypal_continuation() ) {
			return 'checkout';
		}

		if ( $this->is_add_payment_method_page() ) {
			return 'add-payment-method';
		}

		if ( $this->is_block_editor() ) {
			return 'block-editor';
		}

		return 'mini-cart';
	}

	/**
	 * The current location.
	 *
	 * @return string
	 */
	protected function location(): string {
		$context = $this->context();
		if ( $context !== 'mini-cart' ) {
			return $context;
		}

		if ( is_shop() || is_product_category() ) {
			return 'shop';
		}

		if ( is_front_page() ) {
			return 'home';
		}

		return '';
	}

	/**
	 * Checks if PayPal payment was already initiated (on the product or cart pages).
	 *
	 * @return bool
	 */
	private function is_paypal_continuation(): bool {
		/**
		 * Property is already defined in trait consumers.
		 *
		 * @psalm-suppress UndefinedThisPropertyFetch
		 */
		$order = $this->session_handler->order();
		if ( ! $order ) {
			return false;
		}

		if ( ! $order->status()->is( OrderStatus::APPROVED )
			&& ! $order->status()->is( OrderStatus::COMPLETED )
		) {
			return false;
		}

		$source = $order->payment_source();
		if ( $source && $source->name() === 'card' ) {
			return false; // Ignore for DCC.
		}

		if ( 'card' === $this->session_handler->funding_source() ) {
			return false; // Ignore for card buttons.
		}

		return true;
	}

	/**
	 * Checks whether current page is Add payment method.
	 *
	 * @return bool
	 */
	private function is_add_payment_method_page(): bool {
		/**
		 * Needed for WordPress `query_vars`.
		 *
		 * @psalm-suppress InvalidGlobal
		 */
		global $wp;

		$page_id = wc_get_page_id( 'myaccount' );

		return $page_id && is_page( $page_id ) && isset( $wp->query_vars['add-payment-method'] );
	}

	/**
	 * Checks whether this user is changing the payment method for a subscription.
	 *
	 * @return bool
	 */
	private function is_subscription_change_payment_method_page(): bool {
		if ( isset( $_GET['change_payment_method'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
			return wcs_is_subscription( wc_clean( wp_unslash( $_GET['change_payment_method'] ) ) ); // phpcs:ignore WordPress.Security.NonceVerification
		}

		return false;
	}

	/**
	 * Checks if it is the block editor page.
	 */
	protected function is_block_editor(): bool {
		if ( ! function_exists( 'get_current_screen' ) ) {
			return false;
		}
		$screen = get_current_screen();
		return $screen && $screen->is_block_editor();
	}
}
