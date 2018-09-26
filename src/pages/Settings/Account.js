import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import Page from "~/src/components/Page";
import SettingsAccountLoadable from "~/src/components/Settings/Account/Loadable";
import { jwtAuth } from "~/src/services/auth";
import userApi from "~/src/api/user";

const handleSubmit = values => {
  const path = jwtAuth.getParsedTokenPayload().sub;
  const options = { data: values, path };

  userApi.get("update").call(options, (err, res) => {
    if (res) {
      message.success(res.msg);
      return;
    }

    message.error(`${err.statusText} (${err.data.msg})`);
  });
};

const handleLoad = (load, props) => {
  const userId = jwtAuth.getParsedTokenPayload().sub;
  const options = { path: userId };

  userApi.get("get").call(options, (err, res) => {
    if (res) {
      load(res.data.user);
    }
  });
};

const SettingsAccount = () => (
  <SettingsAccountLoadable
    handleLoad={handleLoad}
    handleSubmit={handleSubmit}
  />
);

const PageSettingsAccount = () => (
  <Page>
    <h1>Account settings</h1>
    <SettingsAccount />
  </Page>
);

export { PageSettingsAccount };

export default PageSettingsAccount;
