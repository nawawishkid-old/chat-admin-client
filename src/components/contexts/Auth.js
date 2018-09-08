import React from "react";
import auth from "../../services/auth/index";

const AuthContext = React.createContext();
const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { isAuth: undefined };

  login = (data, callback = () => {}) => {
    console.log("login!");
    auth.login(data, (err, res) => {
      callback();
      this.setState({ isAuth: auth.auth() });
    });
  };

  logout = () => {
    console.log("logout!");
    auth.logout();
    this.setState({ isAuth: auth.auth() });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          isAuth: auth.auth()
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer };
