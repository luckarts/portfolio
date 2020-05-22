import React from 'react';
import PropTypes from 'prop-types';
import Masonry from '../../organismes/Galerie';
import { connect } from 'react-redux';
import Navbar from '../../organismes/Navbar';
import { getIndexPhoto } from 'store/galeriePhoto/actions';
import Link from '../../atoms/Button/link';
import { Helmet } from 'react-helmet';

import '../style.scss';
const propTypes = {
	photoIndex: PropTypes.number,
	getIndexPhoto: PropTypes.func
};

const Galerie = ({ edit, getIndexPhoto, photoIndex, isAuthenticated }) => {
	return (
		<div className="home-page">
			<Helmet>
				<title>Artworks</title>
				<meta property="og:title" content="Artworks"></meta>
				<meta property="og:url" content="https://bachelart.fr/illustrations"></meta>
				<meta name="description" content="Artworks / Illustrations / 2D / Photoshop " />
			</Helmet>
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">Mes illustrations</h1>
				</div>
				{isAuthenticated && <Link addIcon title="Importer une illustration" href="/add/illustration" />}

				<Masonry getIndexPhoto={getIndexPhoto} photoIndex={photoIndex} />
			</div>
		</div>
	);
};
export const mapStateToProps = state => ({
	photoIndex: state.GetIndex.photoIndex,
	isAuthenticated: state.user.user
});
Galerie.propTypes = propTypes;

export default connect(mapStateToProps, { getIndexPhoto })(Galerie);
