import { CREATE_USER_ERRORS } from './actions';
import { initialState } from '../initialState';

export default (state = initialState.formErrors, action) => {
  switch (action.type) {
    case CREATE_USER_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};
