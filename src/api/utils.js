import React from "react";

/**
 * Attach API model object(s) from given API model name to the given component as a prop.
 *
 * @param {String|String[]} name String or Array of string name of API model
 * @see ~/src/services/api/*
 * @returns {Function} New React functional component with attached `api` props.
 */
export const withApi = (...name) => Component => {
  console.log("name: ", name);
  const theNames = name[0].constructor.name === "Array" ? [...name[0]] : name;
  const api = {};

  theNames.forEach(
    name => (api[name] = require(`~/src/services/api/${name}`).default)
  );

  return props => <Component api={api} {...props} />;
};
