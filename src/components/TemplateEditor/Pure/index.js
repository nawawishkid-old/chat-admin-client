import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import InputsSelector from "../components/InputsSelector";
import schemes from "../field-schemes";

const TemplateEditor = ({ form, handleSubmit, ...rest }) => (
  <Form {...rest}>
    {schemes.map((scheme, index) => {
      const decorator = makeAntdFieldDecorator(
        scheme({ defaultValue: "55555" })
      );

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

TemplateEditor.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func
};

export default TemplateEditor;
