import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
const propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
};
const Button = ({ children, onClick }) => {
	return <span onClick={onClick}>{children}</span>;
};
Button.propTypes = propTypes;
export default Button;
