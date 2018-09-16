import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import InputsSelector from "./components/InputsSelector";
import schemes from "~/src/components/TemplateBuilder/field-schemes";

const TemplateBuilder = ({ form, handleSubmit, ...rest }) => (
  <Form {...rest}>
    {schemes.map((scheme, index) => {
      const decorator = makeAntdFieldDecorator(scheme);

      return (
        <Form.Item key={index} label={scheme.label}>
          {form.getFieldDecorator(decorator.id, decorator.options)(
            decorator.component
          )}
        </Form.Item>
      );
    })}
    <InputsSelector form={form} />
    <Form.Item>
      <Button onClick={handleSubmit}>Create</Button>
    </Form.Item>
  </Form>
);

TemplateBuilder.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func
};

export default TemplateBuilder;
