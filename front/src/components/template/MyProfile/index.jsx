import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Navbar from '../../organismes/Navbar';
import LoginForm from 'components/organismes/Form';
import { updateUserRequest } from 'store/user/actions';

const MyProfile = ({ updateUserRequest }) => {
	const [initialState, setState] = useState({
		description: '',
		cv: [],
	});
	useEffect(() => {
		async function fetchData() {
			const res = await axios('/api/users/user');
			setState(res.data.user);
		}
		fetchData();
	}, []);
	const onSubmit = (values) => {

		let formdata = new FormData();

		formdata.append('cv', values.cv[0]);
		formdata.append('description', values.description);

		updateUserRequest(formdata);
	};

	return (
		<div className="home-page">
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">Edit profile </h1>
				</div>
				<LoginForm initialState={initialState} setState={setState} onSubmit={onSubmit} pdf />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.user,
});
export default connect(mapStateToProps, { updateUserRequest })(MyProfile);
