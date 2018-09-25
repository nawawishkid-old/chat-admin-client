import React from "react";
import { Route } from "react-router-dom";
import RouteAuth from "./Auth";
import RouteGroup from "./Group";

const renderRoutes = routes =>
  routes.map((route, index) => {
    const { path, component, options } = route;
    const { auth, redirect, ...rest } = options;
    const TheRoute = auth ? RouteAuth : Route;

    return (
      <TheRoute
        path={path}
        component={component}
        key={path + index}
        {...rest}
      />
    );
  });

const route = { renderRoutes, RouteAuth, RouteGroup };

export { renderRoutes, RouteAuth, RouteGroup, route };

export default route;
