import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { renderRoutes } from "~/src/services/route";
import adminRouter from "~/src/data/routes/admin";

const { Content } = Layout;
const StyledContent = styled(Content)`
  padding: 2em 1em;
`;
const PageAdminContent = () => <StyledContent>{renderRoutes(adminRouter.routes)}</StyledContent>;

export { PageAdminContent };

export default PageAdminContent;

