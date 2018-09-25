import React from "react";
import { Layout } from "antd";

const { Sider } = Layout;

class PageAdminSidebar extends React.Component {
  state = {
    isCollapsed: true
  };

  onCollapse = () => this.setState({ isCollapsed: !this.state.isCollapsed });

  render() {
    const { isCollapsed } = this.state;
    const { children, ...rest } = this.props;

    return (
      <Sider
        {...rest}
        breakpoint="lg"
        collapsedWidth={0}
        collapsible
        onCollapse={this.onCollapse}
        // onBreakpoint={onBreakpoint || (broken => console.log("broken: ", broken))}
        collapsed={isCollapsed}
        style={{ height: "100vh" }}
      >
        {children}
      </Sider>
    );
  }
}

export { PageAdminSidebar };

export default PageAdminSidebar;
