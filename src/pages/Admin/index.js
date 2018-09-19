import React from "react";
import { Layout } from "antd";
import Page from "~/src/components/Page";
import PageAdminContent from "./Content";
import PageAdminHeader from "./Header";
import PageAdminSidebar from "./Sidebar";

const PageAdmin = () => (
  <Page title="Admin">
    <Layout>
    <PageAdminSidebar />
    <Layout>
      <PageAdminHeader />
      <PageAdminContent />
    </Layout>
    </Layout>
  </Page>
);

export { PageAdmin };

export default PageAdmin;
