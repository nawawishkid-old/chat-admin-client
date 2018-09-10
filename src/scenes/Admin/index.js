import React from "react";
import {
  AdminSidebar,
  AdminMenu,
  AdminHeader,
  AdminContent
} from "./components/";
import { Layout } from "antd";

/**
 * Uses in `react-router-dom`'s <Router />
 */
const Admin = ({ match }) => (
  <Layout>
    <AdminSidebar>
      <AdminMenu match={match} />
    </AdminSidebar>
    <Layout style={{ height: "100vh" }}>
      <AdminHeader />
      <AdminContent match={match} />
    </Layout>
  </Layout>
);

export { Admin };

export default Admin;
