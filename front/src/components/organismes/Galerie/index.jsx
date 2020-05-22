import React, { useState, useEffect } from 'react';
import LightboxGalerie from '../Lightbox';

import Card from 'components/molecules/Card';
import 'react-image-lightbox/style.css';
import './style.scss';

import { Masonry } from 'lucky-react-component';
import axios from 'axios';

const Galerie = ({ photoIndex, getIndexPhoto, ...props }) => {
	const [lightboxIsOpen, setIsOpen] = useState(false);
	const [photos, setGallery] = useState([false]);
	useEffect(() => {
		async function fetchData() {
			const res = await axios('/api/gallery/get/gallery');
			setGallery(res.data.gallery);
		}
		fetchData();
	}, []);
	const openLightbox = (index) => {
		getIndexPhoto(index);
		setIsOpen(true);
	};

	const closeLightbox = (bool) => {
		setIsOpen(bool);
	};

	return (
		<div className="full-container masonry">
			<Masonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
				{photos.map((photo, i) => (
					<div key={i} onClick={() => openLightbox(i)}>
						<Card i={i} className="card card-masonry" photo={photo.image} />
					</div>
				))}
			</Masonry>
			<LightboxGalerie
				photoIndex={photoIndex}
				lightboxIsOpen={lightboxIsOpen}
				closeLightbox={closeLightbox}
				getIndexPhoto={getIndexPhoto}
				photos={photos}
			/>
		</div>
	);
};

export default Galerie;
