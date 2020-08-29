import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

const Typography = ({ editIcon, addIcon, className, variante, custom, primary, secondary, href, children }) => {
  const heading = `font-portfolio ${primary ? 'text-primary' : secondary ? 'text-secondary' : 'text-textTitle'}`;

  if (variante === 'h1') {
    return <h1 className={` ${heading} ${className} ${custom ? '' : 'text-3xl font-bold'} `}>{children}</h1>;
  } else if (variante === 'h2') {
    return <h2 className={`${heading} ${className} ${custom ? '' : 'text-2-8xl font-bold'}`}>{children}</h2>;
  } else if (variante === 'h3') {
    return <h3 className={`${heading} ${className} ${custom ? '' : 'text-1-8xl font-bold'}`}>{children}</h3>;
  } else if (variante === 'h4') {
    return <h4 className={`${heading} ${className}`}>{children}</h4>;
  } else if (variante === 'a' && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${heading}  ${className} ${custom ? '' : 'cursor-pointer underline hover:text-secondary'} `}
      >
        {children}
      </a>
    );
  } else if (variante === 'link' && editIcon) {
    return (
      <Link
        to={href}
        className={`${heading} ${className} ${
          custom ? '' : 'flex underline w-full my-4 justify-center hover:text-secondary'
        } `}
      >
        <MdModeEdit />
        <span className="ml-2">{children}</span>
      </Link>
    );
  } else if (variante === 'link' && addIcon) {
    return (
      <Link
        to={href}
        className={`${heading} ${className} ${
          custom ? '' : 'flex underline w-full my-4 justify-center hover:text-secondary'
        } `}
      >
        <IoIosAdd />
        <span className="ml-2">{children}</span>
      </Link>
    );
  } else {
    return <p className={className + ' font-portfolio text-textSecondary'}>{children}</p>;
  }
};
const propTypes = {
  children: PropTypes.node,
  variante: PropTypes.string,
  href: PropTypes.string,
  custom: PropTypes.bool,
  addIcon: PropTypes.bool,
  editIcon: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string
};

Typography.propTypes = propTypes;
export default Typography;
