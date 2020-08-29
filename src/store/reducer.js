import { combineReducers } from 'redux';

import tabs from './tabs/reducer';
import user from './user/reducer';

import formErrors from './form/reducer';
import galeriePhoto from './galeriePhoto/reducer';
const reducers = {
  tabs,
  user,
  galeriePhoto,
  formErrors
};

export default combineReducers(reducers);
