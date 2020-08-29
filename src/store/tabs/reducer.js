import { CURRENT_TAB } from './actions';
import { initialState } from '../initialState';

export default (state = initialState.tabs, { type, payload }) => {
  switch (type) {
    case CURRENT_TAB:
      return {
        ...state,
        current_tabs: payload.current_tabs
      };

    default:
      return state;
  }
};
