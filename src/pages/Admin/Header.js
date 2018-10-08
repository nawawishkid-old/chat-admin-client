import React from "react";
import { Layout, Row, Col, Icon, Button } from "antd";
import styled from "styled-components";
import { withAuth } from "~/src/services/auth";
import { withAdminContext } from "./context";

const { Header } = Layout;

const HeaderContent = props => (
  <Row>
    <Col span={12}>
      <SidebarTrigger />
    </Col>
    <Col span={12}>
      <GreetingText />
    </Col>
  </Row>
);

const StyledSpan = styled.span`
  float: right;
  color: white;
`;

const GreetingText = withAuth(({ user }) => (
  <StyledSpan>{user ? "Hello, " + user.name + "!" : ""}</StyledSpan>
));

const StyledIcon = styled(Icon)`
  color: white;
  font-size: 2em;
  vertical-align: middle;
`;

const SidebarTrigger = withAdminContext(({ sidebar }) => (
  <StyledIcon type="bars" onClick={() => sidebar.open()} />
));

const StyledHeader = styled(Header)`
  padding: 0 1em;

  @media only screen and (min-width: 768px) {
    padding: 0 3em;
  }
`;

const PageAdminHeader = props => (
  <StyledHeader>
    <HeaderContent />
  </StyledHeader>
);

export { PageAdminHeader };

export default PageAdminHeader;
