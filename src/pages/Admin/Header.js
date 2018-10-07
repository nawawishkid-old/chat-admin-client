import React from "react";
import { Layout } from "antd";
import { withAuth } from "~/src/services/auth";
import ButtonLogout from "~/src/components/buttons/Logout";

const { Header } = Layout;

const HeaderContent = withAuth(({ user }) => (
  <div>
    <span style={{ color: "white" }}>Hello, {user.name}!</span>
    <div style={{ float: "right" }}>
      <ButtonLogout />
    </div>
  </div>
));

const PageAdminHeader = props => (
  <Header>
    <HeaderContent />
  </Header>
);

export { PageAdminHeader };

export default PageAdminHeader;
