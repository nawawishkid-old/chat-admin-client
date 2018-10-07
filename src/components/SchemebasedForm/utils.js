import React from "react";
import makeLoadable from "~/src/components/Loadable";
import { SchemebasedFormConsumer } from "./Context";

/**
 * Make given component loadable using loadable() HOC
 *
 * @param {function} Component React functional component to be loadable.
 * @return {Function} React loadable functional component.
 */
const loadable = Component =>
  makeLoadable(({ data, handleSubmit, ...rest }) => (
    <Component doc={data} handleSubmit={handleSubmit} {...rest} />
  ));

/**
 * HOC React.Context to get all unused props from SchemebasedFormContainer (a main component)
 * 
 * @param {function} Component React functional component to be injected with props.
 * @returns {function} React functional component.
 */
const withProps = Component => outerProps => (
  <SchemebasedFormConsumer>
    {props => <Component {...outerProps} {...props} />}
  </SchemebasedFormConsumer>
);

/**
 * Create a valid componentScheme from form's values for sending to web service.
 */
const makeComponentScheme = values => {
  const scheme = {};
  const schemeProps = {};
  const schemeOptions = [];

  for (let key in values) {
    const value = values[key];
    const typeofValue = typeof value;

    if (typeofValue === "undefined" || value === "" || value === null) {
      continue;
    }

    const splittedKey = key.split("_");

    // Assign top level properties
    if (splittedKey[0] === "componentScheme") {
      scheme[splittedKey[1]] = value;
      continue;
    }

    // Assign scheme.componentScheme.options (for component type 'select' only)
    // pattern is options_[label,value]_<id>
    // e.g. options_label_1, options_value_1, options_label_2, ...
    if (splittedKey[0] === "options") {
      const optionId = splittedKey[2];

      if (typeof schemeOptions[optionId] !== "undefined") {
        continue;
      }

      const labelKey = [splittedKey[0], "label", optionId].join("_");
      const valueKey = [splittedKey[0], "value", optionId].join("_");
      const defaultKey = [splittedKey[0], "default", optionId].join("_");

      const label = values[labelKey];
      const value = values[valueKey];
      const isDefault = values[defaultKey];

      // Set default value
      if (isDefault) {
        schemeProps.defaultValue = value;
      }

      schemeOptions.push({ label, value, isDefault });

      continue;
    }

    // Assign scheme.props
    if (splittedKey[0] === "props") {
      schemeProps[splittedKey[1]] = value;
    }
  }

  if (Object.keys(schemeProps).length > 0) {
    scheme.props = schemeProps;
  }

  if (schemeOptions.length > 0) {
    scheme.options = schemeOptions;
  }

  return scheme;
};

export { loadable, withProps, makeComponentScheme };
