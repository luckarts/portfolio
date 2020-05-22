import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProjectForm from '../../organismes/ProjectForm';
import Navbar from '../../organismes/Navbar';
import { createRequestProject } from 'store/project/action';

const NewProject = ({ createRequestProject }) => {
	const [form, setState] = useState({
		title: null,
		description: null,
		techno: null,
		link: null,
		img: null
	});

	const onSubmit = values => {
		let formdata = new FormData();
		for (let key in values) {
			formdata.append(key, values[key]);
		}
		formdata.append('img', values.img[0]);
		createRequestProject(formdata);
	};
	return (
		<div className="home-page">
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">Nouveau Projet </h1>
				</div>
				<ProjectForm initialState={form} setState={setState} onSubmit={onSubmit} />
			</div>
		</div>
	);
};

export default connect(null, { createRequestProject })(NewProject);
