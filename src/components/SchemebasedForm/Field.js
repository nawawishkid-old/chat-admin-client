import React from "react";
import PropTypes from "prop-types";
import FieldInput from "./FieldInput";
import CommonField from "~/src/components/common/form/Field";

/**
 * Edit fieldScheme before calling this component to add additional properties
 */
const Field = ({ fieldScheme, form, children, ...rest }) => {
  const { componentScheme, options, ...restScheme } = fieldScheme;
  const theOptions = setInitialValues(componentScheme.props, options);

  return (
    <CommonField options={theOptions} form={form} {...restScheme} {...rest}>
      {children ? children : <FieldInput componentScheme={componentScheme} />}
    </CommonField>
  );
};

const setInitialValues = (props, options) => {
  const clonedOptions = options ? { ...options } : {};

  if (!props) {
    return clonedOptions;
  }

  const { defaultValue } = props;

  if (defaultValue) {
    clonedOptions.initialValue = defaultValue;
  }

  return clonedOptions;
};

Field.propTypes = {
  fieldScheme: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired // antd's form object
};

export { Field };

export default Field;
