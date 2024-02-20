ocommerce_has_block_template', '__return_true', 10, 0 );
			}
		} elseif (
			( is_post_type_archive( 'product' ) || is_page( wc_get_page_id( 'shop' ) ) ) && $this->block_template_is_available( 'archive-product' )
		) {
			$templates = get_block_templates( array( 'slug__in' => array( 'archive-product' ) ) );

			if ( isset( $templates[0] ) && BlockTemplateUtils::template_has_legacy_template_block( $templates[0] ) ) {
				add_filter( 'woocommerce_disable_compatibility_layer', '__return_true' );
			}

			if ( ! BlockTemplateUtils::theme_has_template( 'archive-product' ) ) {
				add_filter( 'woocommerce_has_block_template', '__return_true', 10, 0 );
			}
		} elseif (
			is_cart() &&
			! BlockTemplateUtils::theme_has_template( CartTemplate::get_slug() ) && $this->block_template_is_available( CartTemplate::get_slug() )
		) {
			add_filter( 'woocommerce_has_block_template', '__return_true', 10, 0 );
		} elseif (
			is_checkout() &&
			! BlockTemplateUtils::theme_has_template( CheckoutTemplate::get_slug() ) && $this->block_template_is_available( CheckoutTemplate::get_slug() )
		) {
			add_filter( 'woocommerce_has_block_template', '__return_true', 10, 0 );
		} else {
			$queried_object = get_queried_object();
			if ( is_null( $queried_object ) ) {
				return;
			}

			if ( isset( $queried_object->taxonomy ) && taxonomy_is_product_attribute( $queried_object->taxonomy ) && $this->block_template_is_available( ProductAttributeTemplate::SLUG )
			) {
				$templates = get_block_templates( array( 'slug__in' => array( ProductAttributeTemplate::SLUG ) ) );

				if ( isset( $templates[0] ) && BlockTemplateUtils::template_has_legacy_template_block( $templates[0] ) ) {
					add_filter( 'woocommerce_disable_compatibility_layer', '__return_true' );
				}

				if ( ! BlockTemplateUtils::theme_has_template( ProductAttributeTemplate::SLUG ) ) {
					add_filter( 'woocommerce_has_block_template', '__return_true', 10, 0 );
				}
			}
		}
	}

	/**
	 * Remove the template panel from the Sidebar of the Shop page because
	 * the Site Editor handles it.
	 *
	 * @see https://github.com/woocommerce/woocommerce-gutenberg-products-block/issues/6278
	 *
	 * @param bool $is_support Whether the active theme supports block templates.
	 *
	 * @return bool
	 */
	public function remove_block_template_support_for_shop_page( $is_support ) {
		global $pagenow, $post;

		if (
			is_admin() &&
			'post.php' === $pagenow &&
			function_exists( 'wc_get_page_id' ) &&
			is_a( $post, 'WP_Post' ) &&
			wc_get_page_id( 'shop' ) === $post->ID
		) {
			return false;
		}

		return $is_support;
	}

	/**
	 * Update the product archive title to "Shop".
	 *
	 * @param string $post_type_name Post type 'name' label.
	 * @param string $post_type      Post type.
	 *
	 * @return string
	 */
	public function update_product_archive_title( $post_type_name, $post_type ) {
		if (
			function_exists( 'is_shop' ) &&
			is_shop() &&
			'product' === $post_type
		) {
			return __( 'Shop', 'woocommerce' );
		}

		return $post_type_name;
	}

	/**
	 * Migrates page content to templates if needed.
	 */
	public function maybe_migrate_content() {
		// Migration should occur on a normal request to ensure every requirement is met.
		// We are postponing it if WP is in maintenance mode, installing, WC installing or if the request is part of a WP-CLI command.
		if ( wp_is_maintenance_mode() || ! get_option( 'woocommerce_db_version', false ) || Constants::is_defined( 'WP_SETUP_CONFIG' ) || Constants::is_defined( 'WC_INSTALLING' ) || Constants::is_defined( 'WP_CLI' ) ) {
			return;
		}

		if ( ! BlockTemplateMigrationUtils::has_migrated_page( 'cart' ) ) {
			BlockTemplateMigrationUtils::migrate_page( 'cart' );
		}
		if ( ! BlockTemplateMigrationUtils::has_migrated_page( 'checkout' ) ) {
			BlockTemplateMigrationUtils::migrate_page( 'checkout' );
		}
	}
}
