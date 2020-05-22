import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BannerProfile from 'components/organismes/BannerProfile';
import Paragraphe from 'components/molecules/Paragraphe';
import parse from 'html-react-parser';
import ListExperience from 'components/organismes/ListExperiences';
import Navbar from '../../organismes/Navbar';
import Link from '../../atoms/Button/link';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '../style.scss';
const ResumePage = ({ edit, isAuthenticated }) => {
	const [user, setUser] = useState({});
	const [listExperience, setlistExperience] = useState([]);
	let id, lastIdExp;
	useEffect(() => {
		async function fetchData() {
			const fetchUser = await axios('/api/users/user');
			const experiences = await axios('/api/experiences/get/experiences');
			setUser(fetchUser.data.user);
			setlistExperience(experiences.data.listExperiences);
		}
		fetchData();
	}, []);
	id = listExperience && listExperience.length;
	lastIdExp = listExperience && listExperience.length > 0 && listExperience[id - 1].id;

	return (
		<div className="home-page">
			<Helmet>
				<title>...::: Bachelart.fr :::... Luc Bachelerie</title>
				<meta property="og:title" content="Luc Bachelerie"></meta>
				<meta property="og:url" content="https://bachelart.fr/luc_bachelerie"></meta>
			</Helmet>
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">À propos</h1>
				</div>
				<BannerProfile user={user} />

				{!edit && isAuthenticated && <Link editIcon title="Gerer mon profil" href="/edit/profile" />}

				<Paragraphe className="container fade" text={user.description && parse(user.description)} title="Information" />

				{edit && isAuthenticated && <Link addIcon title="Add New Experiences" href={`/experience/new/${lastIdExp}`} />}
				{!edit && isAuthenticated && <Link editIcon title="Gerer mes experiences" href="/edit/experience" />}

				<ListExperience edit={edit} listExperience={listExperience} />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.user.user
});
export default connect(mapStateToProps)(ResumePage);
