import React from "react";
// import * as auth from "../../services/auth/jwt";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../contexts/Auth";

const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        {...rest}
        render={props =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )}
  </AuthConsumer>
);

export { AuthRoute };

export default AuthRoute;

/**
 * BUGGY COMPONENT!
 */
// class AuthRoute extends React.Component {
//   state = {
//     isLoaded: false,
//     isLoggedin: undefined,
//     attempt: 0
//   };

//   routeRender = (Component, redirect) => {
//     return props =>
//       this.state.isLoggedin ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={redirect || "/login"} />
//       );
//   };

//   componentDidUpdate() {
//     console.log("AuthRoute.componentDidUpdate()");

//     if (auth.auth()) {
//       return true;
//     }

//     auth.refresh().then(() => {
//       if (!this._isMounted) {
//         return;
//       }

//       this.setState({
//         isLoggedin: auth.auth(),
//         isLoaded: true
//       });
//     });
//   }

//   componentDidMount() {
//     // console.log("AuthRoute.componentDidMount()");
//     this._isMounted = true;

//     if (auth.auth()) {
//       this.setState({ isLoggedin: true, isLoaded: true });
//       return;
//     }

//     auth
//       .refresh()
//       .then(() => this.setState({ isLoggedin: auth.auth(), isLoaded: true }));
//   }

//   componentWillUnmount() {
//     // console.warn("AuthRoute.componentWillUnmount()");
//     this._isMounted = false;
//   }

//   render() {
//     // console.log("AuthRoute.state: ", this.state);
//     const {
//       component: Component,
//       waitComponent: WaitComponent,
//       redirect,
//       ...rest
//     } = this.props;
//     const { isLoaded, isLoggedin } = this.state;

//     if (!isLoaded) {
//       return <p>Loading...</p>;
//     }

//     if (!isLoggedin) {
//       return <Redirect to={redirect || "/login"} />;
//     }

//     return <Route {...rest} isLoggedin={isLoggedin} component={Component} />;
//   }
// }

// export default AuthRoute;
