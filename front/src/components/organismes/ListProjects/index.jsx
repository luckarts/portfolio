import React from 'react';
import CardProject from '../../molecules/Card/CardProject';
import './style.scss';

const MainHeader = (props) => {
	const { listProjets } = props;

	return listProjets.length > 0 && listProjets.map((projet, index) => <CardProject key={index} {...projet} {...props} />);
};

export default MainHeader;
