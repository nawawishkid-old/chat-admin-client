import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "~/src/services/auth";

const RouteAuth = withAuth(({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
));

export { RouteAuth };

export default RouteAuth;
