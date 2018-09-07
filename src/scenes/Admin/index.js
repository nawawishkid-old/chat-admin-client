import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { Button } from "antd";
import * as auth from "../../services/auth/jwt";
import { Layout, AuthRoute } from "../../components/index";
import { Templates, Info, Profile } from "./scenes/index";
// import LogoutButton from '../../components/buttons/Logout/index';
// import logger from "../../services/loggers/scene";
import { sceneLogger as logger } from "../../services/loggers/index";

const Header = ({ onClick }) => (
  <div>
    <span style={{ color: "white" }}>Hello, Nawawish!</span>
    <div style={{ float: "right" }}>
      <Button onClick={onClick}>Log out</Button>
    </div>
  </div>
);

class Admin extends React.Component {
  constructor(props) {
    logger.debug("Home.constructor()");
    super(props);
    this.state = {
      isLoggedin: undefined
    };
    this.routes = {
      templates: `${props.match.url}/templates`,
      info: `${props.match.url}/info`,
      profile: `${props.match.url}/profile`
    };
    this.menus = [
      { to: "/", txt: "Home" },
      { to: this.routes.templates, txt: "Templates" },
      { to: this.routes.info, txt: "Info" },
      { to: this.routes.profile, txt: "Profile" }
    ];
  }

  logout = () => {
    logger.debug("Home.logout()");
    auth.logout();
    auth.ensureAuth().then(res => {
      console.log("-- " + res);
      this.setState({ isLoggedin: res });
    });
  };

  getMenus = () => {
    logger.debug("Home.getMenus()");
    return this.menus.map(item => (
      <Link to={item.to} className="nav-link">
        {item.txt}
      </Link>
    ));
  };

  // Lifecycles
  componentDidMount() {
    logger.debug("Home.componentDidMount()");
    auth.ensureAuth().then(res => {
      logger.debug("isAuth: " + res);
      this.setState({ isLoggedin: res });
    });
  }

  render() {
    logger.debug("Home.render()");
    if (typeof this.state.isLoggedin === "undefined") {
      return <h1>Loading...</h1>;
    }

    if (!this.state.isLoggedin) {
      return <Redirect to="/" />;
    }

    return (
      <Layout
        menus={this.getMenus()}
        header={<Header onClick={this.logout} />}
        style={{ minHeight: "100vh" }}
      >
        <Route path={this.routes.templates} component={Templates} />
        <Route path={this.routes.info} component={Info} />
        <AuthRoute path={this.routes.profile} component={Profile} />
        <Route path={this.routes.profile} component={Profile} />
      </Layout>
    );
  }
}

export default Admin;
