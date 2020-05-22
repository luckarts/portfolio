import { call, put } from 'redux-saga/effects';
import api from '../API/api';
import { createUserErrors } from 'store/user/actions';
import history from '../routes/history';

export function* createArtwork(action) {
	try {
		yield call(api.artwork.createProject, action.img);
		history.push('/galerie');
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
