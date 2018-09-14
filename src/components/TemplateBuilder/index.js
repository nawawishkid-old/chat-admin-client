import React from "react";
import { Button, Form } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import { nameFieldScheme } from "./field-schemes";
import InputsSelector from "./components/InputsSelector";
import templateApi from "~/src/services/api/template";

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
              name: "Nawawish",
              content: "Hello, {{name}}",
              openTag: "{{",
              closingTag: "}}"
            }
          },
          data =>
            console.log("data: ", data) || this.setState({ created: true })
        );
      }
    });
  };

  render() {
    const { form } = this.props;

    return (
      <Form>
        {this.state.created ? <h1>CREATED!</h1> : null}
        <InputsSelector />
        <Form.Item>
          <Button onClick={this.handleSubmit}>Create</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(TemplateBuilder);
