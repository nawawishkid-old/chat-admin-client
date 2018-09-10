import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// import { Button } from "antd";
import { Layout as CustomLayout } from "../../components/index";
import { Templates, Info, Profile } from "./scenes/index";
import LogoutButton from "../../components/buttons/Logout/index";
import {
  AdminSidebar,
  AdminMenu,
  AdminHeader,
  AdminContent
} from "./components/index";
import { Layout, Row, Col, Menu } from "antd";
import NotFound from "~/src/scenes/NotFound/index";

const { Sider, Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

// const TemplatesMenu = props => (
//   <SubMenu {...props} title="Templates">
//     <Menu.Item key="1">
//       <Link>New</Link>
//     </Menu.Item>
//   </SubMenu>
// );

const HeaderContent = () => (
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
    // this.routes = {
    //   templates: `${props.match.url}/templates`,
    //   info: `${props.match.url}/info`,
    //   profile: `${props.match.url}/profile`
    // };
    this.pages = [
      {
        name: "Templates",
        path: `${props.match.url}/templates`,
        component: Templates
      },
      { name: "Info", path: `${props.match.url}/info`, component: Info },
      {
        name: "Profile",
        path: `${props.match.url}/profile`,
        component: Profile
      }
    ];
    // this.menus = [
    //   { to: "/", txt: "Home" },
    //   { to: this.routes.templates, txt: "Templates" },
    //   { to: this.routes.info, txt: "Info" },
    //   { to: this.routes.profile, txt: "Profile" }
    // ];
  }

  state = {
    isCollapsed: true,
    collapsedWitdh: 0
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getMenus = () => {
    return this.menus.map(item => (
      <Link
        to={item.to}
        className="nav-link"
        onClick={() => console.log("Menu's clicked")}
      >
        {item.txt}
      </Link>
    ));
  };

  __temp = () => (
    <CustomLayout
      menus={this.getMenus()}
      header={<HeaderContent />}
      style={{ minHeight: "100vh" }}
    >
      <Route path={this.routes.templates} component={Templates} />
      <Route path={this.routes.info} component={Info} />
      <Route path={this.routes.profile} component={Profile} />
    </CustomLayout>
  );

  render() {
    const { isCollapsed } = this.state;

    return (
      <Layout>
        <AdminSidebar>
          <AdminMenu pages={this.pages} />
        </AdminSidebar>
        <Layout style={{ height: "100vh" }}>
          <Header>
            <HeaderContent />
          </Header>
          <Content>
            <Switch>
              {this.pages.map((page, index) => (
                <Route
                  key={index}
                  path={page.path}
                  component={page.component}
                />
              ))}
              {/* <Route key={this.pages.length} component={NotFound} /> */}
              <Route
                render={() => (
                  <h1 style={{ textAlign: "center" }}>Page Not Found.</h1>
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export { Admin };

export default Admin;
