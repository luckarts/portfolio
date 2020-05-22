import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import './style.scss';

const EditLink = ({ editIcon, addIcon, href, title }) => {
	return (
		<div className="edit">
			{editIcon && (
				<Link to={href}>
					<MdModeEdit />
					{title}
				</Link>
			)}
			{addIcon && (
				<Link to={href}>
					<IoIosAdd />
					{title}
				</Link>
			)}
		</div>
	);
};
const propTypes = {
	editIcon: PropTypes.bool,
	addIcon: PropTypes.bool,
	href: PropTypes.string,
	title: PropTypes.string,
};

EditLink.propTypes = propTypes;
export default EditLink;
