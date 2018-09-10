import React from "react";
// import styled from "styled-components";
import { Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";

const Input = ({ form, label, id, options, componentScheme, ...rest }) => {
  const fieldDecorator = makeAntdFieldDecorator({
    id,
    options,
    componentScheme
  });
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
