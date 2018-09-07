import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthRoute } from "./components/index";
import { Home, Admin, Signup, Login, NotFound } from "./scenes/index";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
