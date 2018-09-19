import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "~/src/services/auth";

export const renderRoutes = routes =>
  routes.map((route, index) => {
    const { auth, path, component, ...rest } = route;
    const TheRoute = auth ? AuthRoute : Route;

    return (
      <TheRoute
        path={path}
        component={component}
        key={path + index}
        {...rest}
      />
    );
  });

export const AuthRoute = withAuth(
  ({ component: Component, isAuth, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
);

export class Router {
  routes = [];

  constructor(basePath) {
    // Slice out trailing slash of basepath, to prevent duplicate slash path.
    basePath =
      basePath[basePath.length - 1] === "/" ? basePath.slice(0, -1) : basePath;
    this.basePath = basePath;
  }

  add = (path, component, options = {}) =>
    console.log(this.basePath + path, component.constructor.name) ||
    this.routes.push({ path: this.basePath + path, component, ...options });

  default = component => this.routes.push({ component });
}
