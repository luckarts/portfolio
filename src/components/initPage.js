import React from 'react';

import Navbar from './Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InitPage = ({ children, current_tabs }) => {
  const { hidenavfoot } = children.props;
  return !hidenavfoot || current_tabs === 1 ? (
    <div className="h-full xsl:pt-32 xs:pt-12 sm:mb-4 sm:bg-gradient-t-default relative">
      <Navbar />
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
export const mapStateToProps = state => ({
  current_tabs: state.tabs.current_tabs
});
InitPage.propTypes = {
  current_tabs: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default connect(mapStateToProps)(InitPage);
