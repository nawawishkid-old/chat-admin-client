import React from "react";
import { jwtAuth } from "~/src/services/auth";

const AuthContext = React.createContext();
const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { isAuth: undefined };

  login = (data, callback = () => {}) => {
    console.log("login()");
    jwtAuth.login(data, (err, res) => {
      callback(err, res);
      this.setState({ isAuth: jwtAuth.auth() });
    });
  };

  logout = () => {
    console.log("logout!");
    jwtAuth.logout();
    this.setState({ isAuth: jwtAuth.auth() });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          isAuth: jwtAuth.auth()
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer };
