import React from 'react';
import PropTypes from 'prop-types';
import { activeTab } from 'store/tabs/actions';
import { connect } from 'react-redux';
import './style.scss';
import { NavLink } from 'react-router-dom';

const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func
};
const Navbar = ({ activeTab, isAuthenticated }) => {
  const navLinkStyle =
    'transform scale-1 font-medium opacity-75 text-white transition duration-300 ease-in-out  text-1xl ml-10 hover:text-white hover:opacity-100 hover:scale-125';
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <nav className=" bg-gray-800  fixed xsl:top-0 w-full z-50 py-4 xs:bottom-0 ">
      <div className="flex max-w-screen-xl justify-between m-auto xsl:px-16  sm:px-8">
        <NavLink
          className="flex relative items-center"
          onClick={() => {
            activeTab(0);
          }}
          to="/"
        >
          <img src={'/img/logo8.png'} className="nav-logo" alt="logo" />
          <img src={'/img/LOGO7.png'} className="nav-logoName" alt="logoName" />
        </NavLink>
        <div className={`flex relative items-center ${isAuthenticated && 'mt-2'}`}>
          <NavLink
            exact
            to="/"
            onClick={() => {
              activeTab(1);
              scrollTop();
            }}
            activeClassName="opacity-100 scale-125 "
            className={`${navLinkStyle} `}
          >
            Projets
          </NavLink>
          <NavLink
            to="/luc_bachelerie"
            activeClassName="opacity-100 scale-125 text-white"
            className={`${navLinkStyle}`}
            onClick={() => {
              scrollTop();
            }}
          >
            À propos
          </NavLink>

          {/* <NavLink to="/illustrations" activeClassName="nav-link active" className="nav-link">
						Galerie
					</NavLink> */}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;
export const mapStateToProps = (state) => ({
  isAuthenticated: state.user.user
});
export default connect(mapStateToProps, { activeTab })(Navbar);
