import React from "react";
import { Layout, Icon, Button } from "antd";
import styled from "styled-components";
import { withAuth } from "~/src/services/auth";
import { withAdminContext } from "./context";
import ButtonLogout from "~/src/components/buttons/Logout";

const { Header } = Layout;

const HeaderContent = withAuth(({ user }) => (
  <div>
    <SidebarTrigger />
    <div style={{ float: "right" }}>
      <span style={{ color: "white" }}>
        {user ? "Hello, " + user.name + "!" : ""}
      </span>

      <ButtonLogout />
    </div>
  </div>
));

const StyledIcon = styled(Icon)`
  color: white;
  font-size: 2em;
  vertical-align: middle;
`;

const SidebarTrigger = withAdminContext(
  props =>
    console.log("props: ", props) || (
      <StyledIcon type="bars" onClick={() => props.sidebar.open()} />
    )
);

const PageAdminHeader = props => (
  <Header>
    <HeaderContent />
  </Header>
);

export { PageAdminHeader };

export default PageAdminHeader;
