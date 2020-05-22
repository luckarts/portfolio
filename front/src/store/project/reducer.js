import { UPDATE_PROJECT_REQUEST } from "./action";

export default (state = { project: [] }, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_REQUEST:

      return {
        ...state,
        user: action.project,
        loaded: true
      };

    default:
      return state;
  }
};
