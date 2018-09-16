import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import { Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";

const Input = props => {
  const { form, label, id, options, componentScheme, ...rest } = props;
  const fieldDecorator = makeAntdFieldDecorator({
    _id: id,
    options,
    componentScheme
  });
  // console.log("fieldDecorator: ", fieldDecorator);
  const layout = {
    labelCol: {
      span: 24,
      xs: 24,
      md: 12
    },
    wrapperCol: {
      span: 24,
      xs: 24,
      md: 12
    }
  };

  return (
    <Form.Item label={label || ""} {...layout} {...rest}>
      {form.getFieldDecorator(fieldDecorator.id, fieldDecorator.options)(
        fieldDecorator.component
      )}
    </Form.Item>
  );
};

Input.propTypes = {
  form: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.object,
  componentScheme: PropTypes.object.isRequired
};

export { Input };

export default Input;
