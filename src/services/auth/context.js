import React from "react";
import { jwtAuth } from "~/src/services/auth";
import userApi from "~/src/api/user";

const AuthContext = React.createContext();
const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { isAuth: undefined, user: undefined };

  login = (data, callback = () => {}) => {
    console.log("login()");
    jwtAuth.login(data, (err, res) => {
      callback(err, res);
      console.log("res: ", res);
      if (res) {
        const userId = jwtAuth.getParsedTokenPayload().sub;
        const options = { path: userId };

        userApi.get("get").call(options, (err, res) => {
          console.log("user res: ", res);
          this.setState({ isAuth: jwtAuth.auth(), user: res.data.user });
        });
      }
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
          isAuth: jwtAuth.auth(),
          user: this.state.user
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer };
