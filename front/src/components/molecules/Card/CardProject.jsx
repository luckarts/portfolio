import React from 'react';
import './style.scss';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/Button';
const propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	techno: PropTypes.string,
	description: PropTypes.string,
	linkCode: PropTypes.string,
	linkWebsite: PropTypes.string,
	edit: PropTypes.bool,
	id: PropTypes.number,
};

const CardProject = ({ title, img, techno, description, linkCode, linkWebsite, edit, id }) => {
	let link;
	if (edit) {
		let slug = title.toLowerCase();
		link = `/edit/project/${slug}`;
	}

	return (
		<div className="card card-project">
			<div className="card-header" style={{ backgroundImage: 'url(' + img + ')' }}>
				<div className="figcaption">
					{linkCode && (
						<Button color="secondary" variante="solid" rounded="rounded" href={linkCode}>
							Code
						</Button>
					)}
					{linkWebsite && (
						<Button color="secondary" variante="solid" rounded="rounded" href={linkWebsite}>
							Demo
						</Button>
					)}

					{edit && (
						<Button color="secondary" variante="solid" rounded="rounded" link={link}>
							Edit
						</Button>
					)}
				</div>
			</div>

			<div className="card-content">
				<h3 className="card-title">{title}</h3>
				{description && <p>{parse(description)}</p>}

				<p>
					Techno: <span className="bold">{techno}</span>
				</p>
			</div>
		</div>
	);
};
CardProject.propTypes = propTypes;
export default CardProject;
