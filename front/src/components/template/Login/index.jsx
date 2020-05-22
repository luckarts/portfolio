import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../organismes/Navbar';
import LoginForm from 'components/organismes/Form';
import { loginUserRequest } from 'store/user/actions';
import './style.scss';

const Login = ({ loginUserRequest }) => {
	const [initialState, setState] = useState({
		username: '',
		password: '',
	});
	const onSubmit = (values) => {
		loginUserRequest(values);
	};

	return (
		<div>
			<Navbar />
			<div className="main-content">
				<div className="section-title-header">
					<h1 className="primary after">Login</h1>
					<LoginForm initialState={initialState} setState={setState} onSubmit={onSubmit} required />
				</div>
			</div>
		</div>
	);
};

export default connect(null, { loginUserRequest })(Login);
