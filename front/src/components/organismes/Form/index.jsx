import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Field from '../../molecules/Field';
import Textarea from '../../molecules/Textarea';
import Dropzone from '../../molecules/DropZone';
import './style.scss';

const Form = ({ onSubmit, initialState, required, setState, serverErrors, pdf }) => {
	const [errorServer, setErrors] = useState({});

	useEffect(() => {
		setErrors({ errors: serverErrors });
	}, [serverErrors]);

	const onChange = (e) => {
		setState({ ...initialState, [e.target.name]: e.target.value });
	};
	const handleOnDrop = (e) => {
		let file = e.target.files[0];
		let value = Object.assign(file, { preview: URL.createObjectURL(file) });
		setState({ ...initialState, value: value });
	};

	let { register, handleSubmit, errors } = useForm();
	return (
		<div className="medium-container">
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				{initialState.username !== undefined && (
					<Field
						name="username"
						type="text"
						label="Username"
						value={initialState.username}
						errors={errors.username}
						autoFocus
						error={errorServer.errors && errorServer.errors.username}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.email !== undefined && (
					<Field
						type="email"
						name="email"
						label="Email"
						value={initialState.email}
						errors={errors.email}
						error={errorServer.errors && errorServer.errors.email}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}

				{initialState.password !== undefined && (
					<Field
						type="password"
						name="password"
						label="Password"
						value={initialState.password}
						error={errorServer.errors && errorServer.errors.password}
						errors={errors.password}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.description !== undefined && (
					<Textarea
						type="text"
						name="description"
						label="description"
						value={initialState.description}
						error={errorServer.errors && errorServer.errors.description}
						errors={errors.description}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.cv !== undefined && (
					<Dropzone type="file" name="cv" register={register} errors={errors.cv} handleOnDrop={handleOnDrop} newImage={initialState.cv} pdf={pdf} />
				)}
				{initialState.img !== undefined && (
					<Dropzone type="file" name="img" register={register} errors={errors.img} handleOnDrop={handleOnDrop} newImage={initialState.value} />
				)}
				<div className="btn--submit">
					<input type="submit" />
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	serverErrors: state.formErrors.errors,
});
export default connect(mapStateToProps)(Form);
