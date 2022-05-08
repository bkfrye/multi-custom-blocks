<?php
/**
 * Plugin Name:       create-block
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-custom-blocks
 *
 * @package           create-block
 */

function create_block_multi_custom_blocks_block_init() {

	$blocks = array(
		'multi-custom-blocks/'
	);

	foreach ( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block);
	}
}
add_action( 'init', 'create_block_multi_custom_blocks_block_init' );
