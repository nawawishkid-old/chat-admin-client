import React from "react";
import styled from 'styled-components';
import Page from "~/src/components/Page";
import LoginForm from "~/src/components/LoginForm";

const StyledPage = styled(Page)`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PageLogin = () => (
  <StyledPage title="Please, login">
    <LoginForm />
  </StyledPage>
);

export { PageLogin };

export default PageLogin;
