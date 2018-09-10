import React from "react";
// import PropTypes from "prop-types";
import { Layout as AntdLayout, Menu, Icon } from "antd";

const { Header, Content, Sider, Footer } = AntdLayout;
// const SubMenu = Menu.SubMenu;

class Layout extends React.Component {
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
      <AntdLayout>
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
        <AntdLayout style={{ height: "100vh" }}>
          <Header>{this.props.header}</Header>
          <Content style={{ height: "100vh", overflowY: "scroll" }}>
            {this.props.children}
          </Content>
          <Footer>{this.props.footer}</Footer>
        </AntdLayout>
      </AntdLayout>
    );
  }
}

export { Layout };
export default Layout;
