import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Field from '../../molecules/Field';
import Textarea from '../../molecules/Textarea';
import Dropzone from '../../molecules/DropZone';

import './style.scss';

const Form = ({ onSubmit, initialState, required, setState, serverErrors }) => {
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
		setState({ ...initialState, img: value });
	};

	let { register, handleSubmit, errors } = useForm();

	return (
		<div className="medium-container">
			<form onSubmit={handleSubmit(onSubmit)}>
				{initialState.title !== undefined && (
					<Field
						name="title"
						type="text"
						label="Title"
						value={initialState.title}
						errors={errors.title}
						autoFocus
						error={errorServer.errors && errorServer.errors.title}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.description !== undefined && (
					<Textarea
						type="text"
						name="description"
						label="Description"
						value={initialState.description}
						errors={errors.description}
						error={errorServer.errors && errorServer.errors.description}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}

				{initialState.techno !== undefined && (
					<Field
						type="text"
						name="techno"
						label="Techno"
						value={initialState.techno}
						error={errorServer.errors && errorServer.errors.techno}
						errors={errors.password}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.linkCode !== undefined && (
					<Field
						type="text"
						name="linkCode"
						label="linkCode"
						value={initialState.linkCode}
						error={errorServer.errors && errorServer.errors.linkCode}
						errors={errors.linkCode}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.linkWebsite !== undefined && (
					<Field
						type="text"
						name="linkWebsite"
						label="linkWebsite"
						value={initialState.linkWebsite}
						error={errorServer.errors && errorServer.errors.linkWebsite}
						errors={errors.linkWebsite}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.img !== undefined && (
					<Dropzone type="file" name="img" register={register} errors={errors.newImage} handleOnDrop={handleOnDrop} newImage={initialState.img} />
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
