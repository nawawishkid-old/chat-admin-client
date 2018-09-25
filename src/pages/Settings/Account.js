import React from "react";
import PropTypes from "prop-types";
import Page from "~/src/components/Page";
import SettingsAccount from "~/src/components/Settings/Account";

const PageSettingsAccount = () => (
  <Page>
    <h1>Account settings</h1>
    <SettingsAccount />
  </Page>
);

export { PageSettingsAccount };

export default PageSettingsAccount;
