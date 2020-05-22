import React from 'react';
import { ImagePreview } from '../ImagePreview/ImagePreview';
import { Placeholder } from '../Placeholder';
import './style.scss';

const Dropzone = ({ newImage, type, name, errors, handleOnDrop, pdf, register }) => {
	return (
		<div className="dropZone">
			{newImage ? <ImagePreview imagefile={newImage} pdf={pdf} /> : <Placeholder />}
			<input type={type} name={name} ref={register({})} onChange={handleOnDrop} />
			{errors && errors.type === 'required' && <span>This is required</span>}
		</div>
	);
};

export default Dropzone;
