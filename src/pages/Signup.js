import React from "react";
import styled from "styled-components";
import Page from "~/src/components/Page";
import SignupForm from "~/src/components/SignupForm";

const StyledPage = styled(Page)`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PageSignup = () => (
  <StyledPage title="Please, signup">
    <SignupForm />
  </StyledPage>
);

export { PageSignup };

export default PageSignup;
