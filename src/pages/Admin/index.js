import React from "react";
import { Layout } from "antd";
import styled from 'styled-components';
import Page from "~/src/components/Page";
import PageAdminContent from "./Content";
import PageAdminHeader from "./Header";
import PageAdminSidebar from "./Sidebar";
import PageAdminMenu from "./Menu";

const StyledLayout = styled(Layout)`
	height: 100vh;
`;

const PageAdmin = () => (
  <Page title="Admin">
    <Layout>
      <PageAdminSidebar>
        <PageAdminMenu />
      </PageAdminSidebar>
      <StyledLayout>
        <PageAdminHeader />
        <PageAdminContent />
      </StyledLayout>
    </Layout>
  </Page>
);

export { PageAdmin };

export default PageAdmin;
