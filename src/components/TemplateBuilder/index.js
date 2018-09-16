import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import Presentational from "./components/Presentational";
import { withApi } from "~/src/services/api/utils";

class TemplateBuilder extends React.Component {
  state = {
    created: false
  };

  handleSubmit = e => {
    const { form, api } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        console.log("submit!");
        console.log("values: ", values);
        // API here!
        if (!api) {
          return;
        }

        const data = {
          name: values.input_name,
          content: values.input_content,
          openTag: values.input_openTag,
          closingTag: values.input_closingTag,
          inputs: values.input_inputs
        };

        api.template.exec("create", { data }, data => {
          console.log("data: ", data);
          this.setState({ created: true });
        });
      }
    });
  };

  render() {
    const { form } = this.props;

    return <Presentational form={form} handleSubmit={this.handleSubmit} />;
  }
}

TemplateBuilder.propTypes = {
  form: PropTypes.object.isRequired,
  api: PropTypes.object
};

export default Form.create()(withApi("template")(TemplateBuilder));
