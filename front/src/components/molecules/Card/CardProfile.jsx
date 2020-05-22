import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const propTypes = {
	user: PropTypes.object,
};

const CardProject = ({ cv }) => {
	return (
		<div className="card-profile card">
			<div className="row">
				<img className="icon-profile" src={'/img/character.png'} alt="img" />

				<div className=" col-lg-7 col-sm-12">
					<h2>Bachelerie Luc</h2>
					<p>
						Développeur Front end Javascript <br />
					</p>
					<div className="reseaux">
						<a className="link-icon" href={'/upload/' + cv} target="_self" rel="noopener noreferrer">
							<img src="/img/logocv.jpg" alt="cv" />
						</a>
						<a className="link-icon" href="https://www.linkedin.com/in/luc-bachelerie-developperjs/" rel="noopener noreferrer">
							<img src="/img/linkedlin.jpg" alt="linkedlin" />
						</a>
						<a className="link-icon" href="mailto:luc.bachelerieart@gmail.com">
							<img src="/img/email.jpg" alt="email" />
						</a>
						<a className="link-icon" href="tel:0771073054">
							<img src="/img/tel.jpg" alt="tel" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
CardProject.propTypes = propTypes;
export default CardProject;
