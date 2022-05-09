/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button, ExternalLink, Icon } from '@wordpress/components';

import './editor.scss';

const Edit = ( props ) => {
	const {
		attributes: { 
			title, 
			mediaID, 
			mediaURL, 
			description,
			btn
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};
	const onChangeDescription = ( value ) => {
		setAttributes( { description: value } );
	};

	const onChangeBtn = ( value ) => {
		setAttributes( { btn: value } );
	};

	console.log(props)

	return (
		<div { ...blockProps } className="editor-card" style={{ margin: `0 4px`}}>
			<MediaUpload
				onSelect={ onSelectImage }
				allowedTypes="image"
				value={ mediaID }
				render={ ( { open } ) => (
					<>
						<Button
							className={
								mediaID ? 'image-button' : 'button button-large'
							}
							onClick={ open }
						>
							{ ! mediaID ? (
								__( 'Upload Image', 'multi-custom-blocks' )
							) : (
								__( 'Replace Image', 'multi-custom-blocks' )
							) }
						</Button>
					</>
				) }
			/>
			<div className="image-card-item">
				<div 
					className="image-card-background" 
					style={{ backgroundImage: `url(${mediaURL})`}}
				>
					<h3>
						<RichText
							tagName="span"
							placeholder={ __(
								'Write card title…',
								'multi-custom-blocks'
							) }
							value={ title }
							onChange={ onChangeTitle }
							className="editor-title"
						/>
					</h3>
				</div>

				<div className="image-card-footer">
					<RichText
						placeholder={ __(
							'Write a description…',
							'multi-custom-blocks'
						) }
						value={ description }
						onChange={ onChangeDescription }
						className="image-card-description"
					/>
					
					{/* what is the best way to ensure URL is provided? */}
					<RichText
						className="image-card-btn"
						tagName="div"
						placeholder={ __(
							'Placeholder text...',
							'multi-custom-blocks'
						) }
						value={ btn }
						onChange={ onChangeBtn }
					/>
				</div>
			</div>
		</div>
	);
};

export default Edit;
