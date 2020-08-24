import { call, put } from 'redux-saga/effects';
import api from '../API/api';
import { createUserErrors, userLoggedIn } from 'store/user/actions';
import history from '../routes/history';

// worker Saga: will be fired on userLoggedIn actions
export function* createUserSaga(action) {
	try {
		const user = yield call(api.user.signup, action.user);
		localStorage.setItem('token', user.token);

		//same as dispatch userLoggedIn action
		yield put(userLoggedIn(user));
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}

export function* fetchUserSaga() {
	try {
		const user = yield call(api.user.fetchCurrentUser);
		yield put(userLoggedIn(user));
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}

export function* loginUserSaga(action) {
	try {
		const user = yield call(api.user.login, action.user);
		localStorage.setItem('token', user.token);
		//same as dispatch userLoggedIn action
		history.push('/');
		yield put(userLoggedIn(user));
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
export function* updateUserRequest(action) {
	try {
		const user = yield call(api.user.update, action.user);
		yield put(userLoggedIn(user));
		history.push('/luc_bachelerie');
		const fetchUser = yield call(api.user.fetchCurrentUser);
		yield put(userLoggedIn(fetchUser));
	} catch (err) {
		yield put(createUserErrors(err.response.data.error));
	}
}
