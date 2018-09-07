import React from "react";
import { Link } from "react-router-dom";
import auth from "../../services/auth/jwt";

class Home extends React.Component {
  // state = {
  //   isLoaded: false,
  //   isLoggedin: undefined
  // };

  getUnAuthComponent = () => (
    <div>
      <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
    </div>
  );

  // componentDidMount() {
  //   auth
  //     .ensureAuth()
  //     .then(res => this.setState({ isLoggedin: res, isLoaded: true }));
  // }

  render() {
    // const { isLoggedin } = this.props;

    // if (typeof isLoggedin === "undefined") {
    //   return <h1>Loading...</h1>;
    // }

    return (
      <div>
        <h1>Chat Admin</h1>
        <small>An app by Nawawish Samerpark</small>
        {auth.auth() ? (
          <p>
            <Link to="/admin">Admin page</Link>
          </p>
        ) : (
          <div>
            <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
