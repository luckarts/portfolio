import React from 'react';
import PropTypes from 'prop-types';
import { LazyImage } from 'lucky-react-component';

const propTypes = {
	className: PropTypes.string,
	i: PropTypes.number.isRequired,
	photo: PropTypes.string,
};

const Card = ({ className, photo, i }) => {
	return <div className={className}>{photo && <LazyImage key={i} src={'/img/' + photo} alt={photo} placeholder={'/thumb/img/' + photo} />}</div>;
};
Card.propTypes = propTypes;
export default Card;
