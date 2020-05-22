import { call, put } from 'redux-saga/effects';
import api from '../API/api';
import { createUserErrors } from 'store/user/actions';
import history from '../routes/history';

export function* createProject(action) {
	try {
		yield call(api.project.createProject, action.project);
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
export function* updateProject(action) {
	try {
		yield call(api.project.updateProject, action);
		history.push('/');
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
