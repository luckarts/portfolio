import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import PropTypes from 'prop-types';

const propTypes = {
	lightboxIsOpen: PropTypes.bool.isRequired,
	photoIndex: PropTypes.number.isRequired,
	closeLightbox: PropTypes.func.isRequired,
	getIndexPhoto: PropTypes.func.isRequired,
};

const LightboxGalerie = ({ lightboxIsOpen, photoIndex, closeLightbox, getIndexPhoto, photos }) => {
	return (
		<div>
			{lightboxIsOpen === true && photos[photoIndex] ? (
				<Lightbox
					mainSrc={'/img/' + photos[photoIndex].image}
					nextSrc="1"
					prevSrc="0"
					onCloseRequest={() => closeLightbox(false)}
					onMovePrevRequest={() => getIndexPhoto((photoIndex + photos.length - 1) % photos.length)}
					onMoveNextRequest={() => getIndexPhoto((photoIndex + 1) % photos.length)}
				/>
			) : (
				<div />
			)}
		</div>
	);
};

LightboxGalerie.propTypes = propTypes;

export default LightboxGalerie;
