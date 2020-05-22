import { call, put } from 'redux-saga/effects';
import api from '../API/api';
import { createUserErrors } from 'store/user/actions';
import history from '../routes/history';

export function* createExperience(action) {
	try {
		yield call(api.experience.createExperience, action.experience);
		history.push('/edit/experience');
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
export function* createListExperience(action) {
	try {
		yield call(api.experience.createListExperience, action.listExperience);
		history.push('/edit/experience');
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
export function* updateExperience(action) {
	try {
		yield call(api.experience.updateExperience, action);
		history.push('/edit/experience');
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
