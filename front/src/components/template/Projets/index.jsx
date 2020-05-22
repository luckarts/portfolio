import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ListProjets from '../../organismes/ListProjects';
import Navbar from '../../organismes/Navbar';
import Link from '../../atoms/Button/link';
import { Helmet } from 'react-helmet';
import '../style.scss';

import PropTypes from 'prop-types';

const propTypes = {
	editIcon: PropTypes.bool,
	addIcon: PropTypes.object,
	href: PropTypes.string,
	title: PropTypes.string,
};

const ProjectPage = ({ edit, isAuthenticated }, ...props) => {
	const [listProjets, setlistProjets] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await axios('/api/projects/get/projects');
			setlistProjets(res.data.projects.reverse());
		}
		fetchData();
	}, []);

	return (
		<div className="home-page">
			<Navbar />
			<Helmet>
				<title>Mes projets</title>

				<meta property="og:title" content="Luc Bachelerie"></meta>

				<meta property="og:url" content="https://bachelart.fr"></meta>
			</Helmet>
			<div className="main-content">
				<div className="section-title-header">
					<h2 className="after">{edit ? ' Edit projets' : 'Mes projets'}</h2>
				</div>

				{edit && <Link addIcon title="Add New Project" href="/project/new" />}
				{!edit && isAuthenticated && <Link editIcon title="Gerer mes projets" href="/edit/projects" />}

				{listProjets && (
					<div className="medium-container has-gutter CardsProjets">
						<ListProjets listProjets={listProjets} edit={edit} {...props} />
					</div>
				)}
			</div>
		</div>
	);
};

export const mapStateToProps = (state) => ({
	isAuthenticated: state.user.user,
});
ProjectPage.propTypes = propTypes;
export default connect(mapStateToProps)(ProjectPage);
