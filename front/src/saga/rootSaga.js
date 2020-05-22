import { takeLatest } from 'redux-saga/effects';
import { LOGIN_USER_REQUEST, FETCH_CURRENT_USER_REQUEST, UPDATE_USER_REQUEST } from 'store/user/actions';
import { CREATE_EXPERIENCE_REQUEST, CREATE_LIST_EXPERIENCE_REQUEST, UPDATE_EXPERIENCE_REQUEST } from 'store/experience/action';
import { CREATE_PROJECT, UPDATE_PROJECT_REQUEST } from 'store/project/action';
import { CREATE_ARTWORK } from 'store/galeriePhoto/actions';
import { loginUserSaga, fetchUserSaga, updateUserRequest } from './userSaga';
import { createExperience, createListExperience, updateExperience } from './experienceSaga';
import { createProject, updateProject } from './projectSaga';
import { createArtwork } from './artworkSaga';

export default function* rootSaga() {
	/*
  Starts createUser on each dispatched `CREATE_USER_REQUEST` action.
  Allows concurrent create of user.
*/
	yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga);
	yield takeLatest(CREATE_LIST_EXPERIENCE_REQUEST, createListExperience);
	yield takeLatest(CREATE_EXPERIENCE_REQUEST, createExperience);
	yield takeLatest(UPDATE_EXPERIENCE_REQUEST, updateExperience);
	yield takeLatest(CREATE_PROJECT, createProject);
	yield takeLatest(CREATE_ARTWORK, createArtwork);
	yield takeLatest(UPDATE_PROJECT_REQUEST, updateProject);
	yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
	yield takeLatest(UPDATE_USER_REQUEST, updateUserRequest);
}
