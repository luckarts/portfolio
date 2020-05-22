import React from 'react';

import BannerHeader from '../../organismes/BannerHeader';
import { Helmet } from 'react-helmet';

const HomePage = (props) => {
	return (
		<div className="home-page">
			<Helmet>
				<title>...::: BachelArt.fr :::...</title>
				<meta property="og:title" content="Bachelart"></meta>
				<meta property="og:url" content="https://bachelart.fr/"></meta>
			</Helmet>
			<BannerHeader {...props} />
		</div>
	);
};

export default HomePage;
