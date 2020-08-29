import React, { useState } from 'react';
import { connect } from 'react-redux';
import { activeTab } from 'store/tabs/actions';
import history from '../../../routes/history';
import useWindowDimensions from 'utils/useWindowDimensions';
import { Home } from 'components/pages';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func,
  children: PropTypes.element,
  child: PropTypes.element,
  home: PropTypes.bool
};

const RIGHT = -1;
const LEFT = 1;

const NavTabs = ({ current_tabs, activeTab, children, child, home }) => {
  const { width } = useWindowDimensions();

  const [trackMouse, setTrackMouse] = useState(false);
  const pagesSwipable = [0, 1, 2];
  const onSwiped = (direction) => {
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = current_tabs + change;

    if (adjustedIdx === 2) history.push('/luc_bachelerie');
    if (adjustedIdx === 3) history.push('/');

    let newIdx;

    if (adjustedIdx >= pagesSwipable.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = pagesSwipable.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    if (newIdx === 0) {
      activeTab(1);
    } else activeTab(newIdx);
  };
  if (width <= 500 && trackMouse === true) {
    setTrackMouse(true);
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwiped(RIGHT),
    onSwipedRight: () => onSwiped(LEFT),
    preventDefaultTouchmoveEvent: trackMouse,
    trackMouse: trackMouse
  });
  return (
    <div {...handlers}>
      {home && current_tabs === 0 && <Home current_tabs={0} activeTab={activeTab} />}
      {child && current_tabs === 1 && child}
      {children}
    </div>
  );
};
export const mapStateToProps = (state) => ({
  current_tabs: state.tabs.current_tabs
});
NavTabs.propTypes = propTypes;
export default connect(mapStateToProps, { activeTab })(NavTabs);
