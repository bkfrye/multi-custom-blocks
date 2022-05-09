/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

const IconRightArrow = () => (
	<Icon
		icon={ () => (
			<svg viewBox="0 0 512 512">
				<path d="M0,308.46H323.15L184.66,438.56,256,512,512,256,256,0,184.66,71.34l138.49,132.2H0Z"/>
			</svg>
		) }
	/>
);

const Save = ( props ) => {
	const {
		attributes: { 
			title, 
			mediaURL, 
			description,
			btn
		},
	} = props;

	const blockProps = useBlockProps.save();

	
	return (
		<div { ...blockProps }>
			<div className="image-card-item">
				<div 
					className="image-card-background" 
					style={{ backgroundImage: `url(${mediaURL})`}}
				>
					{/* need to use a different method to display backgroundImage */}
					<img src={mediaURL} alt="" style="display: none;" /> 
					<h3><RichText.Content 
						tagName="span" 
						value={ title } 
					/></h3>
				</div>
				
				<div className="image-card-footer">
					<RichText.Content
						tagName="p"
						value={ description }
						className="image-card-description"
					/>

					<RichText.Content
						tagName="div"
						value={ btn }
						className="image-card-btn"
					/>
				</div>
			</div>
		</div>
	);
};

export default Save;
