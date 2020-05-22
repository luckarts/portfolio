import React, { useState } from 'react';
import pages from '../../../db/Pages';
import { connect } from 'react-redux';
import { activeTab } from 'store/tabs/actions';
import history from '../../../routes/history';
import useWindowDimensions from 'Utils/useWindowDimensions';
import Home from 'components/template/Home';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
const propTypes = {
	current_tabs: PropTypes.number,
	activeTab: PropTypes.func,
	children: PropTypes.node,
	child: PropTypes.node,
	home: PropTypes.bool,
};

const RIGHT = -1;
const LEFT = 1;

const NavTabs = ({ current_tabs, activeTab, children, child, home }) => {
	const { width } = useWindowDimensions();

	const [trackMouse, setTrackMouse] = useState(false);

	const onSwiped = (direction) => {
		const change = direction === RIGHT ? RIGHT : LEFT;
		const adjustedIdx = current_tabs + change;

		if (adjustedIdx === 2) history.push('/luc_bachelerie');
		if (adjustedIdx === 3) history.push('/illustrations');
		if (adjustedIdx === 4) history.push('/');

		let newIdx;
		if (adjustedIdx >= pages.length) {
			newIdx = 0;
		} else if (adjustedIdx < 0) {
			newIdx = pages.length - 1;
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
		trackMouse: trackMouse,
	});
	return (
		<div>
			<div {...handlers}>
				{home && current_tabs === 0 && <Home current_tabs={0} activeTab={activeTab} />}
				{child && current_tabs === 1 && child}
				{children}
			</div>
		</div>
	);
};
export const mapStateToProps = (state) => ({
	current_tabs: state.tabs.current_tabs,
});
NavTabs.propTypes = propTypes;
export default connect(mapStateToProps, { activeTab })(NavTabs);
