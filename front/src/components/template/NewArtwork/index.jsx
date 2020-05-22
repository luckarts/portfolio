import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../../organismes/Form';
import Navbar from '../../organismes/Navbar';
import { createRequestArtwork } from 'store/galeriePhoto/actions';

const NewArtwork = ({ createRequestArtwork }) => {
	const [form, setState] = useState({
		img: [],
	});

	const onSubmit = (values) => {
		let formdata = new FormData();
		formdata.append('img', values.img[0]);
		createRequestArtwork(formdata);
	};
	return (
		<div className="home-page">
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">Nouveau Artwork </h1>
				</div>
				<Form initialState={form} setState={setState} onSubmit={onSubmit} />
			</div>
		</div>
	);
};

export default connect(null, { createRequestArtwork })(NewArtwork);
