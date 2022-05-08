<?php
/**
 * Plugin Name:       Multi Custom Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            @bkfrye
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-custom-blocks
 *
 * @package           multi-custom-blocks
 */

function create_block_multi_custom_blocks_block_init() {

	$blocks = array(
		'image-card/',
		'image-card-section/'
	);

	foreach ( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block);
	}
}
add_action( 'init', 'create_block_multi_custom_blocks_block_init' );
