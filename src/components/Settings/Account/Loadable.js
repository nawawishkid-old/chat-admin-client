import React from "react";
import PropTypes from "prop-types";
import loadable from "~/src/components/Loadable";
import { withRouter } from "react-router-dom";
import SettingsAccountContainer from "./Container";

let SettingsAccountLoadable = ({ data, handleSubmit, ...rest }) => (
  <SettingsAccountContainer doc={data} handleSubmit={handleSubmit} {...rest} />
);

SettingsAccountLoadable = loadable(SettingsAccountLoadable);

export { SettingsAccountLoadable };

export default SettingsAccountLoadable;
