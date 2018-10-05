import React from "react";
import { Layout } from "antd";
import styled from 'styled-components';

const { Sider } = Layout;
const StyledSider = styled(Sider)`
	z-index: 100;
`;

class PageAdminSidebar extends React.Component {
  state = {
    isCollapsed: true
  };

  onCollapse = () => this.setState({ isCollapsed: !this.state.isCollapsed });

  render() {
    const { isCollapsed } = this.state;
    const { children, ...rest } = this.props;

    return (
      <StyledSider
        {...rest}
        breakpoint="lg"
        collapsedWidth={0}
        collapsible
        onCollapse={this.onCollapse}
        // onBreakpoint={onBreakpoint || (broken => console.log("broken: ", broken))}
        collapsed={isCollapsed}
      >
        {children}
      </StyledSider>
    );
  }
}

export { PageAdminSidebar };

export default PageAdminSidebar;
