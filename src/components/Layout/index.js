import React from "react";
// import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Sider, Footer } = Layout;
// const SubMenu = Menu.SubMenu;

class Main extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getMenuItem = (data, key) => {
    return <Menu.Item key={key}>{data}</Menu.Item>;
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          onCollapse={this.onCollapse}
          collapsed={this.state.collapsed}
          style={{ height: "100vh" }}
        >
          <Menu theme="dark">
            {React.Children.map(this.props.menus, this.getMenuItem)}
          </Menu>
        </Sider>
        <Layout style={{ height: "100vh" }}>
          <Header>{this.props.header}</Header>
          <Content style={{ height: "100vh", overflowY: "scroll" }}>
            {this.props.children}
          </Content>
          <Footer>{this.props.footer}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
