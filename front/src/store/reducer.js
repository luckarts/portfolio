import { combineReducers } from 'redux';

import tabs from './tabs/reducer';
import user from './user/reducer';
import project from './project/reducer';
import formErrors from './form/reducer';
import GetIndex from './galeriePhoto/reducer';
const reducers = {
	tabs,
	GetIndex,
	user,
	project,
	formErrors,
};

export default combineReducers(reducers);
