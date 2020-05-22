import React, { useState } from 'react';
import { connect } from 'react-redux';
import ExperienceForm from '../../organismes/ExperienceForm';
import Navbar from '../../organismes/Navbar';
import { useParams } from 'react-router-dom';
import { createRequestListExperience, createRequestExperience } from 'store/experience/action';
const CreateExperience = ({ createRequestExperience, createRequestListExperience }) => {
	const { id } = useParams();
	const [IDnewListExp, setIDNewListExp] = useState(0);
	const [newListExp, setNewListExp] = useState([]);
	const [form, setState] = useState({
		experience: { year: null },
		date: null,
		fonction: null,
		company: null,
		link: null,
		list_experience: [{ description: null, id: null }],
	});
	const addListExperience = () => {
		newListExp[IDnewListExp] = { description: null };
		setIDNewListExp(IDnewListExp + 1);
	};

	const onSubmit = () => {
		if (newListExp.length > 0) createRequestListExperience({ id: id, newListExp: newListExp });
		createRequestExperience(form);
	};

	return (
		<div className="home-page">
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">Nouvelle Experience </h1>
				</div>
				<ExperienceForm
					initialState={form}
					setNewListExp={setNewListExp}
					newListExp={newListExp}
					setState={setState}
					onSubmit={onSubmit}
					addListExperience={addListExperience}
					createExperience
				/>
			</div>
		</div>
	);
};

export default connect(null, { createRequestExperience, createRequestListExperience })(CreateExperience);
