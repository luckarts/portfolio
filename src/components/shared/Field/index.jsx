import React from 'react';
import PropTypes from 'prop-types';

const Field = React.forwardRef(({ label, errors, name, type, defaultValue, autoComplete, autoFocus, error }, ref) => {
  const className = `mb-3 ${errors ? 'border-red-500' : ''}`;

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-1">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className="shadow bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        autoFocus={autoFocus}
        defaultValue={defaultValue ? defaultValue : ''}
        autoComplete={autoComplete}
        ref={ref}
      />
      {error && <span className="leading-loose text-red-500 ">{error}</span>}
      {error && errors && <span className="leading-loose text-red-500 "> & </span>}
      {errors && errors.type === 'required' && <span className="leading-loose text-red-500">This is required</span>}
    </div>
  );
});
const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  errors: PropTypes.object,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.string,
  defaultValue: PropTypes.string
};

Field.propTypes = propTypes;
export default Field;
