const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		'multi-custom-blocks': [
			'./includes/block-editor/blocks/image-card-section',
			'./includes/block-editor/blocks/image-card',
		]
	},
};
