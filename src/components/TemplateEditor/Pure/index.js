import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import InputsSelector from "../components/InputsSelector";
import schemes from "../field-schemes";

const PureTemplateEditor = ({ form, handleSubmit, templateData, ...rest }) => (
  <Form {...rest}>
    {schemes.map((scheme, index) => {
      console.log("PureTemplateEditor -- scheme: ", scheme);
      scheme.options.initialValue = templateData[scheme.name];
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

PureTemplateEditor.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func
};

export default PureTemplateEditor;
