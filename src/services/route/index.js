import React from "react";
import { Route } from "react-router-dom";
import RouteAuth from "./Auth";
import Router from "./Router";

const renderRoutes = routes =>
  routes.map((route, index) => {
    const { path, component, options } = route;
    console.log('options: ', options);
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

const route = { renderRoutes, RouteAuth, Router };

export { renderRoutes, RouteAuth, Router, route };

export default route;
