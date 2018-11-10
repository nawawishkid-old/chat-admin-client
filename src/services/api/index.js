import React from "react";
import APIGroup from "./Model";
import {
  API_SERVER_HOST,
  API_SERVER_PORT,
  API_SERVER_PROTOCAL
} from "~/src/configs/api";

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
  API_SERVER_PROTOCAL +
  "://" +
  API_SERVER_HOST +
  ":" +
  (API_SERVER_PORT || 80) +
  path;

const api = { APIGroup, withApi, apiResolver };

export { APIGroup, withApi, apiResolver, api };

export default api;
