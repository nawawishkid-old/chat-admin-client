import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Checkbox } from "antd";

const OPTION_LABEL_NAME_PREFIX = "options_label_";
const OPTION_VALUE_NAME_PREFIX = "options_value_";
const OPTION_DEFAULT_NAME_PREFIX = "options_default_";

const commonOptions = {
  rules: [{ required: true, message: "This field is required" }]
};

// Common between two components below.
const OptionCommonField = ({
  label,
  form,
  onChange,
  id,
  defaultValue,
  value,
  ...rest
}) => (
  <Form.Item label={label}>
    {form.getFieldDecorator(id, {
      ...commonOptions,
      initialValue: defaultValue,
      setFieldsValue: value
    })(<Input type="text" />)}
  </Form.Item>
);

OptionCommonField.propTypes = {
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  defaultValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

/**
 * Display option's label
 */
const OptionLabelField = ({ id, ...rest }) => (
  <OptionCommonField
    label="Option label"
    id={OPTION_LABEL_NAME_PREFIX + id}
    {...rest}
  />
);

/**
 * Display option's value
 */
const OptionValueField = ({ id, ...rest }) => (
  <OptionCommonField
    label="Option value"
    id={OPTION_VALUE_NAME_PREFIX + id}
    {...rest}
  />
);

const OptionDefaultField = ({ form, id, checked, ...rest }) => (
  <Form.Item label="default">
    {form.getFieldDecorator(OPTION_DEFAULT_NAME_PREFIX + id, {
      initialValue: checked,
      valuePropName: "checked",
      setFieldsValue: checked
    })(<Checkbox {...rest} />)}
  </Form.Item>
);

export {
  OptionCommonField,
  OptionLabelField,
  OptionValueField,
  OptionDefaultField
};
