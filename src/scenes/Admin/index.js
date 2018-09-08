import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
// import { Button } from "antd";
import { Layout } from "../../components/index";
import { Templates, Info, Profile } from "./scenes/index";
// import { Menu, Layout } from "antd";
import LogoutButton from "../../components/buttons/Logout/index";

// const { Header, Sider, Content } = Layout;
// const SubMenu = Menu.SubMenu;

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

  state = {
    collapsed: true
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

  render() {
    return (
      <Layout
        menus={this.getMenus()}
        header={<HeaderContent />}
        style={{ minHeight: "100vh" }}
      >
        <Route path={this.routes.templates} component={Templates} />
        <Route path={this.routes.info} component={Info} />
        <Route path={this.routes.profile} component={Profile} />
      </Layout>
    );
  }
}

// const TemplatesMenu = props => (
//   <SubMenu {...props} title="Templates">
//     <Menu.Item key="1">Option 1</Menu.Item>
//   </SubMenu>
// );
// const AdminLayout = props => (
//   <Layout>
//     <Sider
//       collapsible
//       onCollapse={this.onCollapse}
//       collapsed={this.state.collapsed}
//       style={{ height: "100vh" }}
//     >
//       <Menu
//         onClick={this.handleClick}
//         // style={{ width: 256 }}
//         defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["sub1"]}
//         mode="inline"
//         theme="dark"
//       >
//         <TemplatesMenu key="sub1" />
//         <Menu.Item key="3">Info</Menu.Item>
//         <Menu.Item key="4">Profile</Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout style={{ height: "100vh" }}>
//       <Header>
//         <HeaderContent />
//       </Header>
//       <Content style={{ height: "100vh", overflowY: "scroll" }}>
//         <Route path={this.routes.templates} component={Templates} />
//         <Route path={this.routes.info} component={Info} />
//         <Route path={this.routes.profile} component={Profile} />
//       </Content>
//     </Layout>
//   </Layout>
// );

export default Admin;
