import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { withAuth } from "~/src/services/auth";
import Page from "~/src/components/Page";
import { AdminContextProvider } from "./context";
import PageAdminContent from "./Content";
import PageAdminHeader from "./Header";
import PageAdminSidebar from "./Sidebar";
import PageAdminMenu from "./Menu";

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledH2 = styled.h2`
  padding: 0 1em;
`;

const SidebarHeader = withAuth(({ user }) => (
  <StyledH2>Hello, {user ? user.name : "umm.. who are you??"}</StyledH2>
));

const PageAdmin = () => (
  <Page title="Admin">
    <AdminContextProvider>
      <Layout>
        <PageAdminSidebar>
          <SidebarHeader />
          <PageAdminMenu />
        </PageAdminSidebar>
        <StyledLayout>
          <PageAdminHeader />
          <PageAdminContent />
        </StyledLayout>
      </Layout>
    </AdminContextProvider>
  </Page>
);

export { PageAdmin };

export default PageAdmin;
