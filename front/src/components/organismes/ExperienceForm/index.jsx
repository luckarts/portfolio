import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Field from '../../molecules/Field';
import Textarea from '../../molecules/Textarea';
import './style.scss';

const Form = ({ onSubmit, initialState, required, setState, createExperience, addListExperience, newListExp, setNewListExp, serverErrors }) => {
	const [errorServer, setErrors] = useState({});

	useEffect(() => {
		setErrors({ errors: serverErrors });
	}, [serverErrors]);

	const onChange = (e, key) => {
		if (e.target.name === 'year') setState({ ...initialState, experience: { year: e.target.value } });
		else if (e.target.name === 'id' + key)
			setState({
				...initialState,
				list_experience: [
					{
						description: initialState.list_experience[key].description,
						id: e.target.value,
					},
				],
			});
		else {
			if (key !== undefined) {
				let newArray = initialState.list_experience;
				newArray[key] = {
					id: initialState.list_experience[key].id,
					description: e.target.value,
				};
				setState({ ...initialState, ...newArray });
			} else {
				setState({ ...initialState, [e.target.name]: e.target.value });
			}
		}
	};
	const onChangeNewExp = (e, key) => {
		const newArray = newListExp;
		newArray[key] = {
			description: e.target.value,
		};
		setNewListExp([...newArray]);
	};
	let { register, handleSubmit, errors } = useForm();
	return (
		<div className="medium-container">
			<form onSubmit={handleSubmit(onSubmit)}>
				{initialState.experience !== undefined && (
					<Field
						name="year"
						type="text"
						label="Year"
						value={initialState.experience.year}
						errors={errors.date}
						autoFocus
						error={errorServer.year && errorServer.errors.year}
						register={register}
						onChange={(e) => onChange(e)}
						required={required}
					/>
				)}
				{initialState.date !== undefined && (
					<Field
						name="date"
						type="text"
						label="date"
						value={initialState.date}
						errors={errors.date}
						autoFocus
						error={errorServer.errors && errorServer.errors.date}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.fonction !== undefined && (
					<Field
						name="fonction"
						type="text"
						label="fonction"
						value={initialState.fonction}
						errors={errors.title}
						autoFocus
						error={errorServer.errors && errorServer.errors.title}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}
				{initialState.company !== undefined && (
					<Field
						type="text"
						name="company"
						label="societé"
						value={initialState.company}
						errors={errors.description}
						error={errorServer.errors && errorServer.errors.company}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}

				{initialState.link !== undefined && (
					<Field
						type="text"
						name="link"
						label="lien company"
						value={initialState.link}
						error={errorServer.errors && errorServer.errors.link}
						errors={errors.link}
						register={register}
						onChange={onChange}
						required={required}
					/>
				)}

				{initialState.list_experience &&
					initialState.list_experience.map((field, index) => (
						<div key={index}>
							<Textarea
								type="text"
								name={'description' + index}
								label={'detail experiences'}
								value={field.description}
								error={errorServer.errors && errorServer.errors.description}
								errors={errors.link}
								register={register}
								onChange={(e) => onChange(e, index)}
								required={required}
							/>
						</div>
					))}
				{newListExp &&
					newListExp.map((obj, index) => (
						<div key={index}>
							<Textarea
								type="text"
								name={'newDescription' + index}
								label={'detail experiences'}
								error={errorServer.errors && errorServer.errors.newDescription}
								errors={errors.link}
								value={obj.description}
								onChange={(e) => onChangeNewExp(e, index)}
							/>
						</div>
					))}

				<button onClick={addListExperience}>Add</button>
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
