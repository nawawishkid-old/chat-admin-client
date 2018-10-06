import React from "react";
import PropTypes from "prop-types";
import FieldInput from "./FieldInput";
import CommonField from "~/src/components/common/form/Field";

/**
 * Edit fieldScheme before calling this component to add additional properties
 */
const Field = ({ fieldScheme, ...rest }) => {
  const { componentScheme, options, ...restScheme } = fieldScheme;
  const theOptions = options ? { ...options } : {};

  if (!componentScheme) {
    console.warn("componentScheme should not be null");
    return <b key="error">No template's input available</b>;
  }

  const { props } = componentScheme;
  const clonedProps = { ...props };

  // Remove props.defaultValue then assign to options.initialValue.
  // The way Ant Design's field decorator works.
  if (clonedProps) {
    if (clonedProps.hasOwnProperty("defaultValue")) {
      theOptions.initialValue = clonedProps.defaultValue;
      delete clonedProps.defaultValue;
    }
  }

  const clonedComponentScheme = { ...componentScheme };

  clonedComponentScheme.props = clonedProps;

	console.log('cloned: ', clonedComponentScheme);

  return (
    <CommonField options={theOptions} {...restScheme} {...rest}>
      <FieldInput componentScheme={clonedComponentScheme} />
    </CommonField>
  );
};

Field.propTypes = {
  fieldScheme: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired // antd's form object
};

export { Field };

export default Field;
