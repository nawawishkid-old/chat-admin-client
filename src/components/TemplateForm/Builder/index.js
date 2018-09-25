import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, message } from "antd";
import { templateApi } from "~/src/api/template";
import { withForm, FormBuilder } from "~/src/services/form";
import templateFormBuilderScheme from "~/src/data/form-schemes/template-form/builder";
import TemplateInputSelector from "../TemplateInputSelector";

class TemplateFormBuilder extends React.Component {
  state = {
    created: undefined
  };

  handleSubmit = () => {
    const { form } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        console.log("form.validateFields.err: ", err);
        return;
      }

      templateApi.get("create").call({ data: values }, (err, res) => {
        if (res) {
          console.log(res.msg);
          form.resetFields();
          message.success(res.msg);
          return;
        }

        message.error(err.msg);
      });
    });
  };

  render() {
    const { form } = this.props;
    const { fields } = templateFormBuilderScheme;

    return (
      <Card>
        <Form>
          {fields.map(scheme => FormBuilder.makeField(scheme, form))}
          <TemplateInputSelector form={form} key="inputs" />
          <Button onClick={this.handleSubmit}>Create</Button>
        </Form>
      </Card>
    );
  }
}

export default withForm(TemplateFormBuilder);
