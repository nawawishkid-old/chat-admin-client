import React from "react";
import { Layout } from "antd";
import ButtonLogout from "~/src/components/buttons/Logout";

const { Header } = Layout;

const HeaderContent = () => (
  <div>
    <span style={{ color: "white" }}>Hello, Nawawish!</span>
    <div style={{ float: "right" }}>
      <ButtonLogout />
    </div>
  </div>
);

const PageAdminHeader = props => (
  <Header>
    <HeaderContent />
  </Header>
);

export { PageAdminHeader };

export default PageAdminHeader;
