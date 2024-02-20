rt_page(
				$address,
				$applepay_request_data_object->shipping_method()
			);
		}
		return false;
	}

	/**
	 * Calculates totals for the product with the given information
	 * Saves the previous cart to reload it after calculations
	 * If no shippingMethodId provided will return the first available shipping
	 * method
	 *
	 * @param WC_Cart    $cart The cart.
	 * @param array      $customer_address customer address to use.
	 * @param array|null $shipping_method shipping method to use.
	 */
	protected function calculate_totals_single_product(
		$cart,
		$customer_address,
		$shipping_method = null
	): array {
		$results = array();
		try {
			// I just care about apple address details.
			$shipping_method_id       = '';
			$shipping_methods_array   = array();
			$selected_shipping_method = array();
			$this->customer_address( $customer_address );
			if ( $shipping_method ) {
				$shipping_method_id = $shipping_method['identifier'];
				WC()->session->set(
					'chosen_shipping_methods',
					array( $shipping_method_id )
				);
			}
			if ( $cart->needs_shipping() ) {
				list(
					$shipping_methods_array, $selected_shipping_method
					) = $this->cart_shipping_methods(
						$cart,
						$customer_address,
						$shipping_method,
						$shipping_method_id
					);
			}
			$cart->calculate_shipping();
			$cart->calculate_fees();
			$cart->calculate_totals();

			$results = $this->cart_calculation_results(
				$cart,
				$selected_shipping_method,
				$shipping_methods_array
			);
		} catch ( Exception $exception ) {
			return array();
		}
		return $results;
	}

	/**
	 * Sets the customer address with ApplePay details to perform correct
	 * calculations
	 * If no parameter passed then it resets the customer to shop details
	 *
	 * @param array $address customer address.
	 */
	protected function customer_address( array $address = array() ): void {
		$base_location     = wc_get_base_location();
		$shop_country_code = $base_location['country'];
		WC()->customer->set_shipping_country(
			$address['country'] ?? $shop_country_code
		);
		WC()->customer->set_billing_country(
			$address['country'] ?? $shop_country_code
		);
		WC()->customer->set_shipping_postcode(
			$address['postcode'] ?? ''
		);
		WC()->customer->set_shipping_city(
			$address['city'] ?? ''
		);
	}

	/**
	 * Add shipping methods to cart to perform correct calculations
	 *
	 * @param WC_Cart    $cart WC Cart instance.
	 * @param array      $customer_address Customer address.
	 * @param array|null $shipping_method Shipping method.
	 * @param string     $shipping_method_id Shipping method id.
	 */
	protected function cart_shipping_methods(
		$cart,
		$customer_address,
		$shipping_method = null,
		$shipping_method_id = ''
	): array {

		$shipping_methods_array = array();
		$shipping_methods       = WC()->shipping->calculate_shipping(
			$this->getShippingPackages(
				$customer_address,
				$cart->get_total( 'edit' )
			)
		);
		$done                   = false;
		foreach ( $shipping_methods[0]['rates'] as $rate ) {
			$shipping_methods_array[] = array(
				'label'      => $rate->get_label(),
				'detail'     => '',
				'amount'     => $rate->get_cost(),
				'identifier' => $rate->get_id(),
			);
			if ( ! $done ) {
				$done               = true;
				$shipping_method_id = $shipping_method ? $shipping_method_id
					: $rate->get_id();
				WC()->session->set(
					'chosen_shipping_methods',
					array( $shipping_method_id )
				);
			}
		}

		$selected_shipping_method = $shipping_methods_array[0];
		if ( $shipping_method ) {
			$selected_shipping_method = $shipping_method;
		}

		return array( $shipping_methods_array, $selected_shipping_method );
	}

	/**
	 * Sets shipping packages for correct calculations
	 *
	 * @param array $customer_address ApplePay address details.
	 * @param float $total Total amount of the cart.
	 *
	 * @return mixed|void|null
	 */
	protected function getShippingPackages( $customer_address, $total ) {
		// Packages array for storing 'carts'.
		$packages                                = array();
		$packages[0]['contents']                 = WC()->cart->cart_contents;
		$packages[0]['contents_cost']            = $total;
		$packages[0]['applied_coupons']          = WC()->session->applied_coupon;
		$packages[0]['destination']['country']   = $customer_address['country'] ?? '';
		$packages[0]['destination']['state']     = '';
		$packages[0]['destination']['postcode']  = $customer_address['postcode'] ?? '';
		$packages[0]['destination']['city']      = $customer_address['city'] ?? '';
		$packages[0]['destination']['address']   = '';
		$packages[0]['destination']['address_2'] = '';

		return apply_filters( 'woocommerce_cart_shipping_packages', $packages );
	}

	/**
	 * Returns the formatted results of the cart calculations
	 *
	 * @param WC_Cart $cart WC Cart object.
	 * @param array   $selected_shipping_method Selected shipping method.
	 * @param array   $shipping_methods_array Shipping methods array.
	 */
	protected function cart_calculation_results(
		$cart,
		$selected_shipping_method,
		$shipping_methods_array
	): array {
		$total = (float) $cart->get_total( 'edit' );
		$total = round( $total, 2 );
		return array(
			'subtotal'        => $cart->get_subtotal(),
			'shipping'        => array(
				'amount' => $cart->needs_shipping()
					? $cart->get_shipping_total() : null,
				'label'  => $cart->needs_shipping()
					? $selected_shipping_method['label'] : null,
			),

			'shippingMethods' => $cart->needs_shipping()
				? $shipping_methods_array : null,
			'taxes'           => $cart->get_total_tax(),
			'total'           => $total,
		);
	}

	/**
	 * Calculates totals for the cart page with the given information
	 * If no shippingMethodId provided will return the first available shipping
	 * method
	 *
	 * @param array      $customer_address The customer address.
	 * @param array|null $shipping_method The shipping method.
	 */
	protected function calculate_totals_cart_page(
		array $customer_address,
		$shipping_method = null
	): array {

		$results = array();
		if ( WC()->cart->is_empty() ) {
			return array();
		}
		try {
			$shipping_methods_array   = array();
			$selected_shipping_method = array();
			// I just care about apple address details.
			$this->customer_address( $customer_address );
			$cart = WC()->cart;
			if ( $shipping_method ) {
				WC()->session->set(
					'chosen_shipping_methods',
					array( $shipping_method['identifier'] )
				);
			}

			if ( $cart->needs_shipping() ) {
				$shipping_method_id = $shipping_method['identifier'] ?? '';
				list(
					$shipping_methods_array, $selected_shipping_method
					)               = $this->cart_shipping_methods(
						$cart,
						$customer_address,
						$shipping_method,
						$shipping_method_id
					);
			}
			$cart->calculate_shipping();
			$cart->calculate_fees();
			$cart->calculate_totals();

			$results = $this->cart_calculation_results(
				$cart,
				$selected_shipping_method,
				$shipping_methods_array
			);

			$this->customer_address();
		} catch ( Exception $e ) {
			return array();
		}

		return $results;
	}

	/**
	 * Empty the cart to use for calculations
	 * while saving its contents in a field
	 */
	protected function save_old_cart(): void {
		$cart = WC()->cart;
		if ( $cart->is_empty() ) {
			return;
		}
		$this->old_cart_contents = $cart->get_cart_contents();
		foreach ( $this->old_cart_contents as $cart_item_key => $value ) {
			$cart->remove_cart_item( $cart_item_key );
		}
		$this->reload_cart = true;
	}

	/**
	 * Reloads the previous cart contents
	 *
	 * @param WC_Cart $cart The cart to reload.
	 */
	protected function reload_cart( WC_Cart $cart ): void {
		if ( ! $this->reload_cart ) {
			return;
		}
		foreach ( $this->old_cart_contents as $cart_item_key => $value ) {
			$cart->restore_cart_item( $cart_item_key );
		}
	}

	/**
	 * Clear the current cart
	 *
	 * @param WC_Cart|null $cart The cart object.
	 * @param string       $cart_item_key The cart item key.
	 * @return void
	 */
	public function clear_current_cart( ?WC_Cart $cart, string $cart_item_key ): void {
		if ( ! $cart ) {
			return;
		}
		$cart->remove_cart_item( $cart_item_key );
		$this->customer_address();
	}

	/**
	 * Removes the old cart, saves it, and creates a new one
	 *
	 * @param ApplePayDataObjectHttp $applepay_request_data_object The request data object.
	 * @return bool | string The cart item key after adding to the new cart.
	 * @throws \Exception If it cannot be added to cart.
	 */
	public function prepare_cart( ApplePayDataObjectHttp $applepay_request_data_object ): string {
		$this->save_old_cart();
		$this->cart_products->set_cart( WC()->cart );

		$product = $this->cart_products->product_from_data(
			array(
				'id'         => (int) $applepay_request_data_object->product_id(),
				'quantity'   => (int) $applepay_request_data_object->product_quantity(),
				'variations' => $applepay_request_data_object->product_variations(),
				'extra'      => $applepay_request_data_object->product_extra(),
				'booking'    => $applepay_request_data_object->product_booking(),
			)
		);

		$this->cart_products->add_products( array( $product ) );
		return $this->cart_products->cart_item_keys()[0];
	}

	/**
	 * Update the posted data to match the Apple Pay request data
	 *
	 * @param ApplePayDataObjectHttp $applepay_request_data_object The Apple Pay request data.
	 */
	protected function update_posted_data( $applepay_request_data_object ): void {
		// TODO : get checkout form data in here to fill more fields like: ensure billing email and phone are filled.

		add_filter(
			'woocommerce_checkout_posted_data',
			function ( array $data ) use ( $applepay_request_data_object ): array {
				$data['payment_method']     = 'ppcp-gateway';
				$data['shipping_method']    = $applepay_request_data_object->shipping_method();
				$data['billing_first_name'] = $applepay_request_data_object->billing_address()['first_name'] ?? '';
				$data['billing_last_name']  = $applepay_request_data_object->billing_address()['last_name'] ?? '';
				$data['billing_company']    = $applepay_request_data_object->billing_address()['company'] ?? '';
				$data['billing_country']    = $applepay_request_data_object->billing_address()['country'] ?? '';
				$data['billing_address_1']  = $applepay_request_data_object->billing_address()['address_1'] ?? '';
				$data['billing_address_2']  = $applepay_request_data_object->billing_address()['address_2'] ?? '';
				$data['billing_city']       = $applepay_request_data_object->billing_address()['city'] ?? '';
				$data['billing_state']      = $applepay_request_data_object->billing_address()['state'] ?? '';
				$data['billing_postcode']   = $applepay_request_data_object->billing_address()['postcode'] ?? '';
				$data['billing_email']      = $applepay_request_data_object->billing_address()['email'] ?? '';
				$data['billing_phone']      = $applepay_request_data_object->billing_address()['phone'] ?? '';

				// ApplePay doesn't send us a billing email or phone, use the shipping contacts instead.
				if ( ! ( $data['billing_email'] ?? false ) ) {
					$data['billing_email'] = $applepay_request_data_object->shipping_address()['email'] ?? '';
				}
				if ( ! ( $data['billing_phone'] ?? false ) ) {
					$data['billing_phone'] = $applepay_request_data_object->shipping_address()['phone'] ?? '';
				}

				if ( ! empty( $applepay_request_data_object->shipping_method() ) ) {
					$data['shipping_first_name'] = $applepay_request_data_object->shipping_address()['first_name'] ?? '';
					$data['shipping_last_name']  = $applepay_request_data_object->shipping_address()['last_name'] ?? '';
					$data['shipping_company']    = $applepay_request_data_object->shipping_address()['company'] ?? '';
					$data['shipping_country']    = $applepay_request_data_object->shipping_address()['country'] ?? '';
					$data['shipping_address_1']  = $applepay_request_data_object->shipping_address()['address_1'] ?? '';
					$data['shipping_address_2']  = $applepay_request_data_object->shipping_address()['address_2'] ?? '';
					$data['shipping_city']       = $applepay_request_data_object->shipping_address()['city'] ?? '';
					$data['shipping_state']      = $applepay_request_data_object->shipping_address()['state'] ?? '';
					$data['shipping_postcode']   = $applepay_request_data_object->shipping_address()['postcode'] ?? '';
					$data['shipping_email']      = $applepay_request_data_object->shipping_address()['email'] ?? '';
					$data['shipping_phone']      = $applepay_request_data_object->shipping_address()['phone'] ?? '';
				}

				return $data;
			}
		);
	}

	/**
	 * Renders the Apple Pay button on the page
	 *
	 * @return bool
	 *
	 * @psalm-suppress RedundantCondition
	 */
	public function render(): bool {
		if ( ! $this->is_enabled() ) {
			return true;
		}

		$button_enabled_product  = $this->settings_status->is_smart_button_enabled_for_location( 'product' );
		$button_enabled_cart     = $this->settings_status->is_smart_button_enabled_for_location( 'cart' );
		$button_enabled_checkout = true;
		$button_enabled_payorder = true;
		$button_enabled_minicart = $this->settings_status->is_smart_button_enabled_for_location( 'mini-cart' );

		add_filter(
			'woocommerce_paypal_payments_sdk_components_hook',
			function( array $components ) {
				$components[] = 'applepay';
				return $components;
			}
		);
		if ( $button_enabled_product ) {
			$default_hookname   = 'woocommerce_paypal_payments_single_product_button_render';
			$render_placeholder = apply_filters( 'woocommerce_paypal_payments_applepay_render_hook_product', $default_hookname );
			$render_placeholder = is_string( $render_placeholder ) ? $render_placeholder : $default_hookname;
			add_action(
				$render_placeholder,
				function () {
					$this->applepay_button();
				}
			);
		}
		if ( $button_enabled_cart ) {
			$default_hook_name  = 'woocommerce_paypal_payments_cart_button_render';
			$render_placeholder = apply_filters( 'woocommerce_paypal_payments_applepay_cart_button_render_hook', $default_hook_name );
			$render_placeholder = is_string( $render_placeholder ) ? $render_placeholder : $default_hook_name;
			add_action(
				$render_placeholder,
				function () {
					$this->applepay_button();
				}
			);
		}

		if ( $button_enabled_checkout ) {
			$default_hook_name  = 'woocommerce_paypal_payments_checkout_button_render';
			$render_placeholder = apply_filters( 'woocommerce_paypal_payments_applepay_checkout_button_render_hook', $default_hook_name );
			$render_placeholder = is_string( $render_placeholder ) ? $render_placeholder : $default_hook_name;
			add_action(
				$render_placeholder,
				function () {
					$this->applepay_button();
				},
				21
			);
		}
		if ( $button_enabled_payorder ) {
			$default_hook_name  = 'woocommerce_paypal_payments_payorder_button_render';
			$render_placeholder = apply_filters( 'woocommerce_paypal_payments_applepay_payorder_button_render_hook', $default_hook_name );
			$render_placeholder = is_string( $render_placeholder ) ? $render_placeholder : $default_hook_name;
			add_action(
				$render_placeholder,
				function () {
					$this->applepay_button();
				},
				21
			);
		}

		if ( $button_enabled_minicart ) {
			$default_hook_name  = 'woocommerce_paypal_payments_minicart_button_render';
			$render_placeholder = apply_filters( 'woocommerce_paypal_payments_applepay_minicart_button_render_hook', $default_hook_name );
			$render_placeholder = is_string( $render_placeholder ) ? $render_placeholder : $default_hook_name;
			add_action(
				$render_placeholder,
				function () {
					echo '<span id="applepay-container-minicart" class="ppcp-button-apm ppcp-button-applepay ppcp-button-minicart"></span>';
				},
				21
			);
		}

		return true;
	}
	/**
	 * ApplePay button markup
	 */
	protected function applepay_button(): void {
		?>
		<div id="applepay-container" class="ppcp-button-apm ppcp-button-applepay">
			<?php wp_nonce_field( 'woocommerce-process_checkout', 'woocommerce-process-checkout-nonce' ); ?>
		</div>
		<?php
	}

	/**
	 * Checks if the module should load the script.
	 *
	 * @return bool
	 */
	public function should_load_script(): bool {
		return true;
	}

	/**
	 * Enqueues the scripts.
	 *
	 * @return void
	 */
	public function enqueue(): void {
		wp_register_script(
			'wc-ppcp-applepay',
			untrailingslashit( $this->module_url ) . '/assets/js/boot.js',
			array(),
			$this->version,
			true
		);
		wp_enqueue_script( 'wc-ppcp-applepay' );

		$this->enqueue_styles();

		wp_localize_script(
			'wc-ppcp-applepay',
			'wc_ppcp_applepay',
			$this->script_data()
		);
		add_action(
			'wp_enqueue_scripts',
			function () {
				wp_enqueue_script( 'wc-ppcp-applepay' );
			}
		);
	}

	/**
	 * Enqueues styles.
	 */
	public function enqueue_styles(): void {
		if ( ! $this->is_enabled() ) {
			return;
		}

		wp_register_style(
			'wc-ppcp-applepay',
			untrailingslashit( $this->module_url ) . '/assets/css/styles.css',
			array(),
			$this->version
		);
		wp_enqueue_style( 'wc-ppcp-applepay' );
	}

	/**
	 * Enqueues scripts/styles for admin.
	 */
	public function enqueue_admin(): void {
		wp_register_style(
			'wc-ppcp-applepay-admin',
			untrailingslashit( $this->module_url ) . '/assets/css/styles.css',
			array(),
			$this->version
		);
		wp_enqueue_style( 'wc-ppcp-applepay-admin' );

		wp_register_script(
			'wc-ppcp-applepay-admin',
			untrailingslashit( $this->module_url ) . '/assets/js/boot-admin.js',
			array(),
			$this->version,
			true
		);
		wp_enqueue_script( 'wc-ppcp-applepay-admin' );

		wp_localize_script(
			'wc-ppcp-applepay-admin',
			'wc_ppcp_applepay_admin',
			$this->script_data_for_admin()
		);
	}

	/**
	 * Returns the script data.
	 *
	 * @return array
	 */
	public function script_data(): array {
		return $this->script_data->apple_pay_script_data();
	}

	/**
	 * Returns the admin script data.
	 *
	 * @return array
	 */
	public function script_data_for_admin(): array {
		return $this->script_data->apple_pay_script_data_for_admin();
	}

	/**
	 * Returns true if the module is enabled.
	 *
	 * @return bool
	 */
	public function is_enabled(): bool {
		try {
			return $this->settings->has( 'applepay_button_enabled' ) && $this->settings->get( 'applepay_button_enabled' );
		} catch ( Exception $e ) {
			return false;
		}
	}
}
