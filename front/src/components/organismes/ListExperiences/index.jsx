import React from 'react';

import CardExperience from 'components/molecules/Card/CardExperience';
import './style.scss';
import './timeline.scss';

const ListExperience = ({ edit, listExperience }) => {
	return (
		<div className="experiences-container">
			{listExperience.length > 0 &&
				listExperience.map((DbListExperiences, index) => {
					const arrow = index % 2 === 0 ? 'after-left' : 'after-right';
					const start = index === 0 && 'before-timeline';
					const end = index === 0 && 'after-timeline';
					return [
						<div key={index} className="col-lg-5 col-sm-12">
							<CardExperience className={'experiences ' + arrow} {...DbListExperiences} edit={edit} />
						</div>,
						DbListExperiences.id % 2 !== 0 && (
							<div key={index + 1} className="timeline-container">
								<div className={'timeline timelineTopRight ' + start} />
								<div className={DbListExperiences.experience.year && 'timelineCenter'}> {DbListExperiences.experience.year}</div>
								<div className={'timeline timelineBottomLeft ' + end} />
							</div>
						),
					];
				})}
		</div>
	);
};

export default ListExperience;
