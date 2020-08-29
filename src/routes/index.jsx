import React from 'react';
import routes from './routes';
import PrivateRoute from './privateRoute';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const Routes = ({ isAuthenticated }) => {
  const routeComponents = routes.map(({ path, component, access }, id) =>
    access ? (
      <PrivateRoute path={path} component={component} key={id} isAuthenticated={isAuthenticated} />
    ) : (
      <Route exact={id === 0 ? true : false} path={path} component={component} key={id} />
    )
  );

  return <Switch>{routeComponents}</Switch>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.user.user
});
export default connect(mapStateToProps)(Routes);
