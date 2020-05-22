import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
export const Icon = ({ className, children }) => {
	return <div className={'icon ' + className}>{children}</div>;
};
Icon.propTypes = propTypes;
