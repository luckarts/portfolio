import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ButtonLinks = ({ children, href, link }) => {
	return [
		link && (
			<button className="btn-links">
				<Link to={link}>{children}</Link>
			</button>
		),

		href && (
			<button className="btn-links">
				<a href={href}>{children}</a>
			</button>
		)
	];
};
const propTypes = {
	href: PropTypes.string,
	children: PropTypes.node
};
ButtonLinks.propTypes = propTypes;
export default ButtonLinks;
