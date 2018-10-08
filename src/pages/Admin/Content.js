import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { renderRoutes } from "~/src/services/route";
import adminRouter from "~/src/data/routes/admin";
import { Switch } from "react-router-dom";

const { Content } = Layout;
const StyledContent = styled(Content)`
  padding: 2em 1em;
  overflow-y: auto;

  @media only screen and (min-width: 992px) {
    padding: 2em 5em;
  }
`;
const PageAdminContent = () => (
  <StyledContent>{renderRoutes(adminRouter.routes)}</StyledContent>
);

export { PageAdminContent };

export default PageAdminContent;
