import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import useWindowDimensions from 'Utils/useWindowDimensions';
import { Loader } from 'components/atoms';
import './style.scss';
import './stars.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from 'lucky-react-component';
import { Icon } from 'components/atoms/Icon';
const propTypes = {
	activeTab: PropTypes.func,
};

const BannerHeader = ({ activeTab }) => {
	const { width } = useWindowDimensions();

	useEffect(() => {
		const timer = setInterval(() => {
			if (width >= 1024) {
				activeTab(1);
			}
		}, 4000);

		return () => clearInterval(timer);
	}, [activeTab, width]);

	return (
		<div className="banner banner-main">
			<div className="banner-inner" onClick={() => activeTab(1)}>
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>

				<div className="banner-container">
					<img src={'img/LOGO7.png'} alt="logo" />
					<h1>Développeur Fullstack Js</h1>
					{width >= 1024 ? (
						<Loader />
					) : (
						<Button color="primary" rounded="rounded" className="btn--arrow">
							Balayer{' '}
							<Icon>
								<IoIosArrowRoundForward />
							</Icon>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

BannerHeader.propTypes = propTypes;

export default BannerHeader;
