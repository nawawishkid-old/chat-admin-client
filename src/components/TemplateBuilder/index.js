import React from "react";
import { Button, Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import InputsSelector from "./components/InputsSelector";
import templateApi from "~/src/services/api/template";
import schemes from "./field-schemes";

class TemplateBuilder extends React.Component {
  state = {
    created: false
  };

  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("submit!");
        console.log("values: ", values);
        // API here!
        templateApi.exec(
          "create",
          {
            data: {
              name: values.input_name,
              content: values.input_content,
              openTag: values.input_openTag,
              closingTag: values.input_closingTag,
              inputs: values.input_inputs
            }
          },
          data => {
            console.log("data: ", data);
            this.setState({ created: true });
          }
        );
      }
    });
  };

  render() {
    const { form } = this.props;

    return (
      <Form>
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
        {this.state.created ? <h1>CREATED!</h1> : null}
        <InputsSelector form={form} />
        <Form.Item>
          <Button onClick={this.handleSubmit}>Create</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(TemplateBuilder);
