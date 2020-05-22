import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './routes';
import configureStore from './store/configure';
import './theme/style.scss';
import { fetchUserRequest, fetchCurrentUserSuccess } from './store/user/actions';

const store = configureStore();

if (localStorage.token) {
	store.dispatch(fetchUserRequest());
} else {
	store.dispatch(fetchCurrentUserSuccess());
}

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('app')
);
