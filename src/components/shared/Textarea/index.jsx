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
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  register: PropTypes.func,
  input: PropTypes.string
};
const Textarea = React.forwardRef(
  (
    { label, errors, name, type, defaultValue, autoComplete, onChange, register, required, autoFocus, error, input },
    ref
  ) => {
    const className = `form-input ${errors ? 'has-error' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-1">
          {label}
        </label>
        <textarea
          name={name}
          type={type}
          id={name}
          className="shadow bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          autoFocus={autoFocus}
          defaultValue={defaultValue ? defaultValue : ''}
          autoComplete={autoComplete}
          onChange={onChange}
          ref={ref}
        />
        {error && <span className="leading-loose text-red-500 ">{error}</span>}
        {error && errors && <span className="leading-loose text-red-500 "> & </span>}
        {errors && errors.type === 'required' && <span className="leading-loose text-red-500 ">This is required</span>}
      </div>
    );
  }
);
Textarea.propTypes = propTypes;
export default Textarea;
