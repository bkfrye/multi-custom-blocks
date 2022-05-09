import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [
	'multi-custom-blocks/image-card',
]

const BLOCKS_TEMPLATE = [
	[ 'core/heading', { 
			level: 3,
			placeholder: 'Section Title',
		}
	],
	[ 'core/group', {},
		[
			[ 'multi-custom-blocks/image-card', { 
					"title": "Card title 1 goes here",
					"mediaID": 1,
					"mediaURL": "https://upload.wikimedia.org/wikipedia/commons/a/a0/North_Carolina_State_University_Belltower.JPG",
					"description": "description text goes here",
					"btn": "<a href='www.google.com' target='_blank'>Button copy</a>"
				} 
			],
			[ 'multi-custom-blocks/image-card', { 
					"title": "Card title 1 goes here",
					"mediaID": 1,
					"mediaURL": "https://upload.wikimedia.org/wikipedia/commons/a/a0/North_Carolina_State_University_Belltower.JPG",
					"description": "description text goes here",
					"btn": "<a href='www.google.com' target='_blank'>Button copy</a>"
				} 
			],
			[ 'multi-custom-blocks/image-card', { 
					"title": "Card title 1 goes here",
					"mediaID": 1,
					"mediaURL": "https://upload.wikimedia.org/wikipedia/commons/a/a0/North_Carolina_State_University_Belltower.JPG",
					"description": "description text goes here",
					"btn": "<a href='www.google.com' target='_blank'>Button copy</a>"
				} 
			]
		]
	]
];

const Edit = () => {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps } className="test-row">
			<InnerBlocks 
				template={ BLOCKS_TEMPLATE }
				allowedBlocks= { ALLOWED_BLOCKS }
			/>
		</div>
	);
};
export default Edit;