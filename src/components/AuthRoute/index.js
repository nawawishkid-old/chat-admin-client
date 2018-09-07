import React from "react";
import * as auth from "../../services/auth/jwt";
import { Route, Redirect } from "react-router-dom";

class AuthRoute extends React.Component {
  state = {
    isLoaded: false,
    isLoggedin: undefined,
    attempt: 0
  };

  routeRender = (Component, redirect) => {
    return props =>
      this.state.isLoggedin ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirect || "/login"} />
      );
  };

  componentDidUpdate() {
    console.log("AuthRoute.componentDidUpdate()");
    const { attempt } = this.state;

    if (auth.auth() || attempt > 0) {
      return true;
    }

    auth.refresh().then(() =>
      this.setState({
        isLoggedin: auth.auth(),
        attempt: attempt + 1,
        isLoaded: true
      })
    );
  }

  componentDidMount() {
    console.log("AuthRoute.componentDidMount()");
    if (auth.auth()) {
      this.setState({ isLoggedin: true, isLoaded: true });
      return;
    }

    auth
      .refresh()
      .then(() => this.setState({ isLoggedin: auth.auth(), isLoaded: true }));
  }

  render() {
    const {
      component: Component,
      waitComponent: WaitComponent,
      redirect,
      ...rest
    } = this.props;
    const { isLoaded, isLoggedin } = this.state;
    // const Component = component;
    // const WaitComponent = waitComponent;

    if (!isLoaded) {
      return <p>Loading...</p>;
    }

    return (
      <Route
        {...rest}
        isLoggedin={isLoggedin}
        render={this.routeRender(Component, redirect)}
      />
    );
  }
}

export default AuthRoute;
