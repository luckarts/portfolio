import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const propTypes = {
	props: PropTypes.object,
	label: PropTypes.string,
	name: PropTypes.string,
	errors: PropTypes.object,
	autoComplete: PropTypes.bool,
	autoFocus: PropTypes.bool,
	required: PropTypes.bool,
	type: PropTypes.string,
	error: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	register: PropTypes.func,
};

const Field = ({ label, errors, name, type, value, autoComplete, onChange, register, required, autoFocus, error, input }) => {
	const className = `form-input ${errors ? 'has-error' : ''}`;

	return (
		<div className={className}>
			<label>{label}</label>
			<input
				name={name}
				type={type}
				autoFocus={autoFocus}
				value={value ? value : ''}
				autoComplete={autoComplete}
				{...input}
				onChange={onChange}
				ref={register({ required: required })}
			/>
			{error && <span>{error}</span>}
			{error && errors && <span> & </span>}
			{errors && errors.type === 'required' && <span>This is required</span>}
		</div>
	);
};
Field.propTypes = propTypes;
export default Field;
