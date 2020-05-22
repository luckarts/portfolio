import React from 'react';
import routes from './routes';
import PrivateRoute from './privateRoute';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const Routes = (isAuthenticated) => {
	const routeComponents = routes.map(({ path, component, access }, key) =>
		access ? (
			<PrivateRoute path={path} component={component} key={key} isAuthenticated={isAuthenticated} />
		) : (
			<Route exact={path ? true : false} path={path} component={component} key={key} />
		)
	);

	return (
		<Router history={history}>
			<Switch>{routeComponents}</Switch>
		</Router>
	);
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.user.user,
});
export default connect(mapStateToProps)(Routes);
