import React from "react";
import PropTypes from "prop-types";
import templateParserApi from "~/src/api/templateParser";
import { Form } from "antd";
import TemplateFormQueryView from "./View";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";

class NoFormTemplateFormQuery extends React.Component {
  state = {
    output: "",
    isCopied: false,
    isLoading: false
  };

  /**
   * Handle form submission
   */
  handleSubmit = () => {
    const { form, template } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("values: ", values);
      const { _id } = template;
      const options = {
        path: _id,
        params: values
      };

      templateParserApi.get("get").call(options, (err, res, status) => {
        if (res) {
          console.log("res: ", res);
          this.setState({ output: res.data.parsedContent, isLoading: false });
        }
      });

      this.setState({ isLoading: true });
    });
  };

  handleCopy = () => {
    console.log("handleCopyText()");
    const textArea = document.createElement("textarea");

    textArea.innerText = this.state.output;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    this.setState({ isCopied: true });
  };

  /**
   * Handle output component (textarea of the form) on change
   */
  handleOutputChange = e => this.setState({ output: e.target.value });

  /**
   * Handle after delete operation
   */
  handleDeleted = () => this.setState({ deleted: true });

  componentDidUpdate() {
    if (this.state.isCopied) {
      setTimeout(() => this.setState({ isCopied: false }), 2000);
    }
  }

  render() {
    if (this.state.deleted) {
      return null;
    }

    const { isCopied, isLoading } = this.state;
    const { form, template, ...rest } = this.props;
    const { inputs, _id, name } = template;

    return (
      <TemplateFormQueryView
        form={form}
        output={this.state.output}
        name={name}
        isCopied={isCopied}
        isLoading={isLoading}
        templateInputs={inputs}
        handleSubmit={this.handleSubmit}
        handleCopy={this.handleCopy}
        handleOutputChange={this.handleOutputChange}
        actions={[
          <ActionEdit templateId={_id} />,
          <ActionDelete templateId={_id} handleDeleted={this.handleDeleted} />
        ]}
        {...rest}
      />
    );
  }
}

NoFormTemplateFormQuery.propTypes = {
  form: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired
};

const TemplateFormQuery = Form.create()(NoFormTemplateFormQuery);

export default TemplateFormQuery;
