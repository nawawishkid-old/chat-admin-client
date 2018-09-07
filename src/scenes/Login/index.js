import React from "react";
import auth from "../../services/auth/index";
import { Redirect } from "react-router-dom";
import { Input, Button, Checkbox } from "antd";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoaded: false,
      // isLoggedin: undefined,
      username: undefined,
      password: undefined
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    console.log("Login.login()");
    const { username, password, remember } = this.state;

    auth.login({ username, password, remember }, (err, data) => {
      if (err) {
        // logger.error(err);
        return;
      }

      this.setState({ isLoggedin: true });
    });
  };

  // componentDidMount() {
  //   auth
  //     .ensureAuth()
  //     .then(res => this.setState({ isLoggedin: res, isLoaded: true }));
  // }

  render() {
    console.log("auth: ", auth);
    // const { isLoggedin, isLoaded } = this.state;

    // if (!isLoaded) {
    //   return <h1>Loading...</h1>;
    // }

    return auth.auth() ? (
      <Redirect to="/" />
    ) : (
      <div>
        <Input
          name="username"
          id="username"
          placeholder="Username"
          onChange={this.inputHandler}
        />
        <Input
          name="password"
          id="password"
          placeholder="Password"
          onChange={this.inputHandler}
        />
        <Checkbox name="remember" id="remember" onChange={this.inputHandler}>
          Remember me
        </Checkbox>
        <br />
        <Button onClick={this.login}>Log in</Button>
      </div>
    );
  }
}

export default Login;
