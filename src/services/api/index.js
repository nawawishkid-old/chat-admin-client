import React from "react";
import APIGroup from "./Model";

/**
 * Attach API model object(s) from given API model name to the given component as a prop.
 *
 * @param {String|String[]} name String or Array of string name of API model
 * @see ~/src/services/api/*
 * @returns {Function} New React functional component with attached `api` props.
 */
const withApi = (...name) => Component => {
  const theNames = name[0].constructor.name === "Array" ? [...name[0]] : name;
  const api = {};

  theNames.forEach(
    name => (api[name] = require(`~/src/services/api/${name}`).default)
  );

  return props => <Component api={api} {...props} />;
};

const apiResolver = (path = "") =>
  REACT_APP_API_SERVER_PROTOCAL +
  "://" +
  REACT_APP_API_SERVER_HOST +
  (REACT_APP_API_SERVER_PORT ? ":" + REACT_APP_API_SERVER_PORT : "") +
  REACT_APP_API_SERVER_BASE_PATH +
  path;

const api = { APIGroup, withApi, apiResolver };

export { APIGroup, withApi, apiResolver, api };

export default api;
