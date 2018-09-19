import React from "react";
import Page from "~/src/components/Page";
import LoginForm from "~/src/components/LoginForm";

const PageLogin = () => (
  <Page title="Please, login">
    <LoginForm />
  </Page>
);

export { PageLogin };

export default PageLogin;
