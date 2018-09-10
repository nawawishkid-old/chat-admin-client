import React from "react";
import { Form } from "antd";

const BaseForm = props => {
  const { onSubmit, children, ...rest } = props;

  return (
    <Form {...rest}>
      {React.Children.map(children, item => (
        <Form.Item>{item}</Form.Item>
      ))}
    </Form>
  );
};

export default BaseForm;
