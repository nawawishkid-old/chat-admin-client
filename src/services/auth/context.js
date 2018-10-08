import React from "react";
import { jwtAuth } from "~/src/services/auth";
import userApi from "~/src/api/user";

const AuthContext = React.createContext();
const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { isAuth: undefined, user: undefined };

  _fetchUserData = () => {
    const payload = jwtAuth.getParsedTokenPayload();

    if (!payload) {
      return;
    }

    const userId = payload.sub;
    const options = { path: userId };

    userApi.get("get").call(options, (err, res) => {
      console.log("user res: ", res);
      this.setState({ isAuth: jwtAuth.auth(), user: res.data.user });
    });
  };

  /**
   * For client to update user data, in case of the user data has been updated,
   * call this method to update user data.
   */
  updateUserData = () => this._fetchUserData();

  login = (data, callback = () => {}) => {
    console.log("login()");
    jwtAuth.login(data, (err, res) => {
      callback(err, res);

      if (res) {
        this._fetchUserData();
      }
    });
  };

  logout = () => {
    console.log("logout!");
    jwtAuth.logout();
    this.setState({ isAuth: jwtAuth.auth() });
  };

  componentDidMount() {
    // Fetch user data
    this._fetchUserData();
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          updateUserData: this.updateUserData,
          isAuth: jwtAuth.auth(),
          user: this.state.user
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer };
