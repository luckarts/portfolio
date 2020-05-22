import { GET_PHOTO_INDEX } from './actions';

export default (state = { photoIndex: 0 }, { type, payload = {} }) => {
	switch (type) {
		case GET_PHOTO_INDEX:
			return {
				...state,
				photoIndex: payload.photoIndex,
			};

		default:
			return state;
	}
};
