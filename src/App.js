import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { APP_BASE_PATH } from "~/src/configs";
import { AuthProvider } from "./services/auth/context";
import { renderRoutes } from "./services/route";
import rootRouteGroup from "~/src/data/routes/root";

const App = () => (
  <BrowserRouter basename={APP_BASE_PATH}>
    <AuthProvider>
      <Switch>{renderRoutes(rootRouteGroup.routes)}</Switch>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
