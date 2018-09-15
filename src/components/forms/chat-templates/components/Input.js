import React from "react";
// import styled from "styled-components";
import { Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";

const Input = ({ form, label, _id, options, componentScheme, ...rest }) => {
  const fieldDecorator = makeAntdFieldDecorator({
    _id,
    options,
    componentScheme
  });
  console.log("fieldDecorator: ", fieldDecorator);
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

export { Input };

export default Input;
