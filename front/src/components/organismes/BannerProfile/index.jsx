import React from 'react';
import CardProfile from '../../molecules/Card/CardProfile';
import './style.scss';

const BannerHeader = ({ user }) => {
	return (
		<div className="banner banner-profile medium-container ">
			<div className="card-inner col-lg-8 col-md-8 col-xs-12">
				<CardProfile {...user} />
			</div>
		</div>
	);
};

export default BannerHeader;
