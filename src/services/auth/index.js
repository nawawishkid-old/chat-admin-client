import React from "react";
import jwt from "./jwt";
import { AuthConsumer } from "~/src/components/Auth/Provider";

export const withAuth = Component => props => (
  <AuthConsumer>
    {authProps => <Component {...authProps} {...props} />}
  </AuthConsumer>
);

export default jwt;
