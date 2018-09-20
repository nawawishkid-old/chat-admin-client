import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AuthProvider } from "./services/auth/context";
import { renderRoutes } from "./services/route";
import rootRouter from "~/src/data/routes/root";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>{renderRoutes(rootRouter.routes)}</Switch>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
