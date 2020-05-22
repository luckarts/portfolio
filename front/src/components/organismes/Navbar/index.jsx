import React from 'react';
import PropTypes from 'prop-types';
import { activeTab } from 'store/tabs/actions';
import { connect } from 'react-redux';
import './style.scss';
import { NavLink } from 'react-router-dom';

const propTypes = {
	current_tabs: PropTypes.number,
	activeTab: PropTypes.func,
};
const Navbar = ({ activeTab, isAuthenticated }) => {
	return (
		<nav className="nav">
			<div className="medium-container-flex">
				<NavLink
					className="nav-brand"
					onClick={() => {
						activeTab(0);
					}}
					to="/"
				>
					<img src={'/img/logo8.png'} className="nav-logo" alt="logo" />
					<img src={'/img/LOGO7.png'} className="nav-logoName" alt="logoName" />
				</NavLink>
				<div className={isAuthenticated ? 'nav-main admin' : 'nav-main'}>
					<NavLink
						exact
						to="/"
						onClick={() => {
							activeTab(1);
						}}
						activeClassName="nav-link active"
						className="nav-link"
					>
						Projets
					</NavLink>
					<NavLink to="/luc_bachelerie" activeClassName="nav-link active" className="nav-link">
						À propos
					</NavLink>
					<NavLink to="/illustrations" activeClassName="nav-link active" className="nav-link">
						Galerie
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = propTypes;
export const mapStateToProps = (state) => ({
	isAuthenticated: state.user.user,
});
export default connect(mapStateToProps, { activeTab })(Navbar);
