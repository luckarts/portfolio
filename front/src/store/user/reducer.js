import { USER_LOGGED_IN, FETCH_CURRENT_USER_SUCCESS } from './actions';

export default (state = { user: null }, action) => {
	switch (action.type) {
		case USER_LOGGED_IN:
			return {
				...state,
				user: action.user,
				loaded: true,
			};
		case FETCH_CURRENT_USER_SUCCESS:
			return {
				...state,
				user: action.user,
				loaded: true,
			};

		default:
			return state;
	}
};
