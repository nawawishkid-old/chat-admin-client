import React from "react";
import { Layout } from "antd";
import LogoutButton from "~/src/components/buttons/Logout";

const { Header } = Layout;

const HeaderContent = () => (
  <div>
    <span style={{ color: "white" }}>Hello, Nawawish!</span>
    <div style={{ float: "right" }}>
      <LogoutButton />
    </div>
  </div>
);

const AdminHeader = props => (
  <Header>
    <HeaderContent />
  </Header>
);

export { AdminHeader };

export default AdminHeader;
