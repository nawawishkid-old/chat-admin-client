import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthConsumer } from "./Provider";
import { withAuth } from "~/src/services/auth";

const BasicRoute = ({ isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const AuthRoute = withAuth(BasicRoute);
// const AuthRoute = ({ component: Component, ...rest }) => (
//   <AuthConsumer>
//     {({ isAuth }) => (
//       <Route
//         {...rest}
//         render={props =>
//           isAuth ? <Component {...props} /> : <Redirect to="/login" />
//         }
//       />
//     )}
//   </AuthConsumer>
// );

export { AuthRoute };

export default AuthRoute;
