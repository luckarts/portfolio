import { GET_PHOTO_INDEX } from './actions';
import { initialState } from '../initialState';

export default (state = initialState.galeriePhoto, { type, payload = {} }) => {
  switch (type) {
    case GET_PHOTO_INDEX:
      return {
        ...state,
        photoIndex: payload.photoIndex
      };

    default:
      return state;
  }
};
