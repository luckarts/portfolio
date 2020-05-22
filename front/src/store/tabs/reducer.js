import { CURRENT_TAB } from "./actions";

export default (state = { current_tabs: 0 }, { type, payload }) => {
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
