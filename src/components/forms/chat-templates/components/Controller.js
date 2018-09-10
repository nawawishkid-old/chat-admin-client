import React from "react";
// import styled from "styled-components";
import { Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";

// Nothing is different from './Input' now
const Controller = ({ form, id, options, componentScheme, ...rest }) => {
  const fieldDecorator = makeAntdFieldDecorator({
    id,
    options,
    componentScheme
  });

  return (
    <Form.Item {...rest}>
      {form.getFieldDecorator(fieldDecorator.id, fieldDecorator.options)(
        fieldDecorator.component
      )}
    </Form.Item>
  );
};

export { Controller };

export default Controller;
