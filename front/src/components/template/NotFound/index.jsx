import React from 'react';
import Navbar from '../../organismes/Navbar';
import './style.scss';
import { Helmet } from 'react-helmet';

const NotFound = () => {
	return (
		<div>
			<Helmet>
				<title>Not Found</title>
			</Helmet>
			<Navbar link="/" />
			<div className="main-content">
				<div className="notfound">
					<h1 className="primary after">404 !</h1>
					<p>La page que vous recherchez n'existe pas.</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
