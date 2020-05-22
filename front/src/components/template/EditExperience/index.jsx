import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../organismes/Navbar';
import ExperienceForm from '../../organismes/ExperienceForm';
import { updateRequestExperience, createRequestListExperience } from 'store/experience/action';

const UpdateExperience = ({ updateRequestExperience, createRequestListExperience }) => {
	let { company } = useParams();

	const [listExperience, setlistExperience] = useState({});
	const [IDnewListExp, setIDNewListExp] = useState(0);
	const [newListExp, setNewListExp] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await axios(`/api/experiences/get/experiences/${company}`);

			setlistExperience(res.data.listExperiences);
		}
		fetchData();
	}, [company]);
	const addListExperience = () => {
		newListExp[IDnewListExp] = { description: null };
		setIDNewListExp(IDnewListExp + 1);
	};

	const onSubmit = (values) => {
		const result = {
			year: values.year,
			date: values.date,
			fonction: values.fonction,
			company: values.company,
			link: values.link,
			list_experience: [],
		};

		const ArrValues = Object.values(values);

		let j = -1;
		for (let i = 5; i < ArrValues.length; i++) {
			j += 1;
			result.list_experience[j] = {
				description: ArrValues[i],
				id: listExperience.list_experience[j].id,
			};
		}
		if (newListExp.length > 0) createRequestListExperience({ id: listExperience.id, newListExp: newListExp });
		if (values) updateRequestExperience(result, listExperience.id);
	};

	return (
		<div className="home-page">
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after"> Experiences {listExperience.company}</h1>
				</div>
				<ExperienceForm
					setNewListExp={setNewListExp}
					newListExp={newListExp}
					initialState={listExperience}
					addListExperience={addListExperience}
					{...listExperience}
					setState={setlistExperience}
					onSubmit={onSubmit}
				/>
			</div>
		</div>
	);
};
export default connect(null, { updateRequestExperience, createRequestListExperience })(UpdateExperience);
