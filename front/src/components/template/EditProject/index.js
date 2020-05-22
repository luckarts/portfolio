import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectForm from '../../organismes/ProjectForm';
import { useParams } from 'react-router-dom';
import Navbar from '../../organismes/Navbar';
import { connect } from 'react-redux';
import { updateRequestProject } from 'store/project/action';

const UpdateProject = ({ updateRequestProject }) => {
	const { projectName } = useParams();

	const [listProjets, setlistProjets] = useState({});
	useEffect(() => {
		async function fetchData() {
			const res = await axios(`/api/projects/get/project/${projectName}`);
			setlistProjets(res.data.projects);
		}
		fetchData();
	}, [projectName]);

	const onSubmit = (values) => {
		let formdata = new FormData();
		for (let key in values) {
			formdata.append(key, values[key]);
		}
		formdata.append('img', values.img[0]);
		updateRequestProject(formdata, listProjets.id);
	};

	return (
		<div className="home-page">
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">{listProjets && listProjets.title}</h1>
				</div>
				<ProjectForm initialState={listProjets} setState={setlistProjets} onSubmit={onSubmit} />
			</div>
		</div>
	);
};

export default connect(null, { updateRequestProject })(UpdateProject);
