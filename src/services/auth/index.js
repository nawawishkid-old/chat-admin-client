import React from "react";
import JWTAuth from "./JWTAuth";
import { AuthConsumer, AuthProvider } from "./context";

const withAuth = Component => props => (
  <AuthConsumer>
    {authProps => <Component {...authProps} {...props} />}
  </AuthConsumer>
);

const jwtAuth = new JWTAuth({
  storageTokenKey: REACT_APP_STORAGE_ACCESS_TOKEN_NAME,
  storagePayloadKey: REACT_APP_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME
});

const auth = { AuthProvider, withAuth, jwtAuth };

export { AuthProvider, withAuth, jwtAuth, auth };

export default auth;
