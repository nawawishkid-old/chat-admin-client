import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import ChatTemplateFormInput from "./components/Input";
import templateParserApi from "~/src/services/api/templateParser";
import queryString from "querystring";
import Presentation from "~/src/components/presentationals/ChatTemplateForm";

class ChatTemplateForm extends React.Component {
  state = {
    output: ""
  };

  /**
   * Event handler for form submit button
   */
  handleSubmit = e => {
    e.preventDefault();

    const { form, templateId } = this.props;

    form.validateFields((err, values) => {
      // console.log("handleSubmit!");
      if (!err) {
        // console.log("Received values of form: ", values);
        const query = queryString.stringify(values);
        const path = templateId + "?" + query;
        // console.log("path: ", path);

        templateParserApi.exec("get", { path }, data => {
          // console.log("data: ", data);
          this.setState({ output: data.content });
        });
      }
    });
  };

  /**
   * Copy output text to clipboard
   */
  handleCopyText = () => {
    console.log("handleCopyText()");
    const textArea = document.createElement("textarea");

    textArea.innerText = this.state.output;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  };

  handleOutputChange = e => {
    this.setState({ output: e.target.value });
  };

  /**
   * Generate and return template's input field from given `inputSchemes` props
   *
   * @return {ChatTemplateFormInput} Template's input field component.
   */
  renderInputComponents = () =>
    this.props.inputSchemes.map((scheme, index) => {
      console.log("scheme: ", scheme);
      const { label, name, options, componentScheme } = scheme;

      return (
        <ChatTemplateFormInput
          label={label}
          id={name}
          options={options}
          componentScheme={componentScheme}
          form={this.props.form}
          key={index}
        />
      );
    });

  render() {
    const { title } = this.props;

    return (
      <Presentation
        title={title}
        output={this.state.output}
        handleSubmit={this.handleSubmit}
        handleCopyText={this.handleCopyText}
        handleOutputChange={this.handleOutputChange}
      >
        {this.renderInputComponents()}
      </Presentation>
    );
  }
}

ChatTemplateForm.propTypes = {
  inputSchemes: PropTypes.arrayOf(PropTypes.object),
  form: PropTypes.object,
  templateId: PropTypes.string,
  title: PropTypes.string
};

const FunctioningChatTemplateForm = Form.create()(ChatTemplateForm);

export default FunctioningChatTemplateForm;
