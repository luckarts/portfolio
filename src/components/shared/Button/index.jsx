import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
  className,
  primary,
  secondary,
  border,
  textSecondary,
  textPrimary,
  type,
  custom,
  rounded,
  children,
  small,
  large,
  href,
  transparent,
  onClick,
  loading,
  hover,
  link
}) => {
  const bg = primary
    ? 'bg-primary text-white'
    : secondary
    ? 'bg-secondary'
    : transparent
    ? 'bg-transparent'
    : 'bg-white';
  const borders =
    border && textPrimary ? 'border-2 border-primary' : border && textSecondary ? 'border-2 border-secondary' : '';
  const text = textPrimary ? 'text-primary' : textSecondary ? 'text-secondary' : '';
  const hov = (hover && textSecondary) || secondary ? 'hover:bg-secondary hover:text-white' : '';
  const size = small ? 'py-1 px-6' : large ? 'py-2 px-6' : '';
  const spinner = loading ? 'flex' : '';
  const heading = `font-portfolio text-lg focus:outline-none ${bg} ${borders} ${spinner} ${text} ${hov} ${size}
  ${rounded ? 'rounded-xlg' : ''}`;

  if (href) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={`${className ? className : ''} ${!custom ? heading : ''} `}
      >
        {children}
      </a>
    );
  } else if (link) {
    return (
      <Link to={link} className={`${className} ${!custom ? heading : ''} `}>
        {children}
      </Link>
    );
  } else if (onClick) {
    return (
      <button type={type} onClick={onClick} className={`${className} ${!custom ? heading : ''} `}>
        {children}
      </button>
    );
  } else if (children) {
    return (
      <button type={type} className={`${className} ${!custom ? heading : ''} `}>
        {loading && <div className="spinner mr-4 mt-1" />}
        {children}
      </button>
    );
  }
};
Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]),
  type: PropTypes.string,
  loading: PropTypes.bool,
  link: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  custom: PropTypes.bool,
  onClick: PropTypes.func,
  border: PropTypes.bool,
  textSecondary: PropTypes.bool,
  textPrimary: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  transparent: PropTypes.bool,
  hover: PropTypes.bool
};

export default Button;
