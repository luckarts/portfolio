import React from 'react';
import PropTypes from 'prop-types';
import Masonry from './ListIllustration';
import { connect } from 'react-redux';
import { getIndexPhoto } from 'store/galeriePhoto/actions';
import { Helmet } from 'react-helmet';
import { Typography } from 'components/shared';

const propTypes = {
  photoIndex: PropTypes.number,
  getIndexPhoto: PropTypes.func
};

const Galerie = ({ edit, getIndexPhoto, photoIndex, isAuthenticated }) => {
  return (
    <>
      <Helmet>
        <title>Artworks</title>
        <meta property="og:title" content="Artworks"></meta>
        <meta property="og:url" content="https://bachelart.fr/illustrations"></meta>
        <meta name="description" content="Artworks / Illustrations / 2D / Photoshop " />
      </Helmet>

      <Typography variante="h2" primary className=" text-center  afterTitle">
        Mes illustrations
      </Typography>

      {isAuthenticated && (
        <Typography variante="link" addIcon href="/add/illustration">
          Importer une illustration
        </Typography>
      )}

      <Masonry getIndexPhoto={getIndexPhoto} photoIndex={photoIndex} />
    </>
  );
};
export const mapStateToProps = (state) => ({
  photoIndex: state.galeriePhoto.photoIndex,
  isAuthenticated: state.user.user
});
Galerie.propTypes = propTypes;

export default connect(mapStateToProps, { getIndexPhoto })(Galerie);
