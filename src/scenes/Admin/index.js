import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
// import { Button } from "antd";
import { Layout } from "../../components/index";
import { Templates, Info, Profile } from "./scenes/index";
import LogoutButton from "../../components/buttons/Logout/index";

const Header = () => (
  <div>
    <span style={{ color: "white" }}>Hello, Nawawish!</span>
    <div style={{ float: "right" }}>
      <LogoutButton />
    </div>
  </div>
);

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: undefined,
      attempt: 0
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

  // logout = () => {

  //   auth.logout();
  //   // auth.ensureAuth().then(res => {
  //   //   console.log("-- " + res);
  //   this.setState({ isLoggedin: false });
  //   // });
  // };

  getMenus = () => {
    return this.menus.map(item => (
      <Link to={item.to} className="nav-link">
        {item.txt}
      </Link>
    ));
  };

  // Lifecycles
  // componentDidMount() {

  //   if (auth.auth()) {
  //     this.setState({ isLoggedin: true });
  //     return;
  //   }

  //   auth.refresh().then(() => this.setState({ isLoggedin: auth.auth() }));
  //   // auth.ensureAuth().then(res => {

  //   //   this.setState({ isLoggedin: res });
  //   // });
  // }

  render() {
    // if (typeof this.state.isLoggedin === "undefined") {
    //   return <h1>Loading...</h1>;
    // }

    // if (!this.state.isLoggedin) {
    //   return <Redirect to="/" />;
    // }

    return (
      <Layout
        menus={this.getMenus()}
        header={<Header />}
        style={{ minHeight: "100vh" }}
      >
        <Route path={this.routes.templates} component={Templates} />
        <Route path={this.routes.info} component={Info} />
        <Route path={this.routes.profile} component={Profile} />
      </Layout>
    );
  }
}

export default Admin;
