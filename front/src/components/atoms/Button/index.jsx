import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export const Button = ({ type, children, color, variante, rounded, href, link }) => {
	const props = ['native', color, variante, rounded];

	const [className, setclassName] = useState('');
	let button = 'button-';

	useEffect(() => {
		let newArray = [];
		props.forEach((prop) => {
			prop && newArray.push(button + prop);
		});
		setclassName(newArray.join(' '));
	}, [props]);

	if (href) {
		return (
			<a href={href} className={className}>
				{children}
			</a>
		);
	} else if (link) {
		return (
			<Link to={link} className={className}>
				{children}
			</Link>
		);
	} else {
		return (
			<button type={type} className={className}>
				{children}
			</button>
		);
	}
};
