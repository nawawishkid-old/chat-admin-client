import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import Pure from "./Pure";
import { withApi } from "~/src/services/api";
import { withRouter } from "react-router-dom";

class TemplateEditor extends React.Component {
  state = {
    created: false,
    templateData: null
  };

  componentDidMount = () => {
    const { api, match } = this.props;
    const options = { path: match.params.templateId };
    const handleApiResponse = (err, res) => {
      if (err || !res.data) {
        console.log("Error: ", err);
        return;
      }

      console.log("api res: ", res);
      this.setState({ templateData: data });
    };

    console.log("options: ", options);

    api.template.exec("get", options, handleApiResponse);
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
          name: values.name,
          content: values.content,
          openTag: values.openTag,
          closingTag: values.closingTag,
          inputs: values.inputs
        };

        api.template.exec("create", { data }, (err, data) => {
          if (!err) {
            console.log("data: ", data);
            this.setState({ created: true });
          }
        });
      }
    });
  };

  render() {
    const { form } = this.props;
    const { templateData } = this.state;

    if (!templateData) {
      return <p>Loading...</p>;
    }

    return (
      <Pure
        form={form}
        handleSubmit={this.handleSubmit}
        templateData={this.state.templateData}
      />
    );
  }
}

TemplateEditor.propTypes = {
  form: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Form.create()(withApi("template")(withRouter(TemplateEditor)));
