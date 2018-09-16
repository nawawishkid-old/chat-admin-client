import React from "react";

export const withApi = name => Component => {
  const api = require(`~/src/services/api/${name}`).default;

  return props => <Component api={api} {...props} />;
};
