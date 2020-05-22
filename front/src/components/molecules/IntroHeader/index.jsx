import React from 'react';

import { Loader } from '../../atoms/';
import '../../scss/typographie.scss';
import '../../scss/loader.scss';
import PropTypes from 'prop-types';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

const containerHeader = ({ className, children }) => {
	return (
		<div className={className}>
			<img src={'/img/LOGO7.png'} className={className} />
			<h1 className={className}>{children}</h1>
			<Loader />
			<span className="btn">{children}</span>
		</div>
	);
};
containerHeader.propTypes = propTypes;
export default containerHeader;
