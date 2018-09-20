import React from "react";
import JWTAuth from "./JWTAuth";
import { AuthConsumer, AuthProvider } from "./context";
import {
  STORAGE_ACCESS_TOKEN_NAME,
  STORAGE_ACCESS_TOKEN_PAYLOAD_NAME
} from "~/src/configs/storage";

const withAuth = Component => props => (
  <AuthConsumer>
    {authProps => <Component {...authProps} {...props} />}
  </AuthConsumer>
);

const jwtAuth = new JWTAuth({
  storageTokenKey: STORAGE_ACCESS_TOKEN_NAME,
  storagePayloadKey: STORAGE_ACCESS_TOKEN_PAYLOAD_NAME
});

const auth = { AuthProvider, withAuth, jwtAuth };

export { AuthProvider, withAuth, jwtAuth, auth };

export default auth;
