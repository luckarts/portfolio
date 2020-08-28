import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configure';
import './styles/tailwind.css';
import { fetchUserRequest, fetchCurrentUserSuccess } from './store/user/actions';
import { Router } from 'react-router-dom';
import history from './routes/history';
import { initialState } from 'store/initialState';
const store = configureStore(initialState);

if (localStorage.token) {
  store.dispatch(fetchUserRequest());
} else {
  store.dispatch(fetchCurrentUserSuccess());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
