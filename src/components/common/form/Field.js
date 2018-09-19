import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

const CommonField = props => {
  const { form, name, children, label, options, ...rest } = props;

  // console.log("Field.children: ", children);

  return (
    <Form.Item label={label} {...rest}>
      {form.getFieldDecorator(name, options)(children)}
    </Form.Item>
  );
};

CommonField.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.shape({
    rules: PropTypes.arrayOf(PropTypes.object),
    initialValue: PropTypes.any
  })
};

export { CommonField };

export default CommonField;
