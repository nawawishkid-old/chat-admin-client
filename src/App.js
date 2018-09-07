import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthRoute } from "./components/index";
import { Home, Admin, Signup, Login, NotFound } from "./scenes/index";
import { AuthProvider } from "./components/contexts/Auth";

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <AuthRoute path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
