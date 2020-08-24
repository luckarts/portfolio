import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  pdf: PropTypes.bool,
  imagefile: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

const ImagePreview = ({ imagefile, pdf }) =>
  pdf ? (
    <div className="pdfPreview">
      <a href={'/upload/' + imagefile}>pdf {imagefile}</a>
    </div>
  ) : (
    <div className="imgPreview">
      <img src={imagefile.preview || imagefile} alt="profile" />
    </div>
  );

ImagePreview.propTypes = propTypes;
export default ImagePreview;
