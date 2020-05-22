import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const propTypes = {
	className: PropTypes.string.isRequired,
	experience: PropTypes.object,
};

const CardExperience = ({ className, edit, date, fonction, link, company, list_experience }) => {
	const component = (
		<div className={'card ' + className}>
			<p>{date}</p>
			<h4> {fonction}</h4>
			<a href={link}>
				<h3> {company}</h3>
			</a>

			{list_experience.length > 0 && (
				<ul>
					{list_experience.map((listExp, index) => (
						<li key={index}>{parse(listExp.description)}</li>
					))}
				</ul>
			)}
		</div>
	);

	return edit ? <Link to={`/edit/experience/${company}`}> {component}</Link> : component;
};
CardExperience.propTypes = propTypes;
export default CardExperience;
