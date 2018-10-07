import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

const CommonField = props => {
  const { form, name, children, label, options, ...rest } = props;

  return (
    <Form.Item label={label} {...rest}>
      {form.getFieldDecorator(name, options)(children)}
    </Form.Item>
  );
};

CommonField.propTypes = {
  children: PropTypes.element.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.shape({
    rules: PropTypes.arrayOf(PropTypes.object),
    initialValue: PropTypes.any
  })
};

export { CommonField };

export default CommonField;
