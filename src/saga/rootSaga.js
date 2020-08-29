import { takeLatest } from 'redux-saga/effects';
import { LOGIN_USER_REQUEST, FETCH_CURRENT_USER_REQUEST, UPDATE_USER_REQUEST } from 'store/user/actions';

import { loginUserSaga, fetchUserSaga, updateUserRequest } from './userSaga';

export default function* rootSaga() {
  /*
  Starts createUser on each dispatched `CREATE_USER_REQUEST` action.
  Allows concurrent create of user.
*/
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga);
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
  yield takeLatest(UPDATE_USER_REQUEST, updateUserRequest);
}
