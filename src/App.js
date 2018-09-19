import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home, Admin, Signup, Login, NotFound } from "./scenes/index";
import { AuthProvider } from "./components/Auth/Provider";
import { renderRoutes } from "./services/route";
import rootRouter from "~/src/data/routes/root";

console.log("routes: ", rootRouter.routes);

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        {renderRoutes(rootRouter.routes)}
        {/* <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <AuthRoute path="/admin" component={Admin} />
        <Route component={NotFound} /> */}
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
