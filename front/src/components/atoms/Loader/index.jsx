import React from 'react';
import './style.scss';
export const Loader = () => {
	return (
		<div className="loader">
			<span key={1} className="loader__ball loader__ball--1" />
			<span key={2} className="loader__ball loader__ball--2" />
			<span key={3} className="loader__ball loader__ball--3" />
		</div>
	);
};
