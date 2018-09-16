import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import ChatTemplateFormInput from "./components/Input";
import queryString from "querystring";
import Presentation from "./components/Presentational";
import { withApi } from "~/src/services/api/utils";

const ACTIVE_MODE = 1;
const EDIT_MODE = 2;
const DELETE_MODE = 3;

class ChatTemplateForm extends React.Component {
  state = {
    output: "",
    mode: ACTIVE_MODE
  };

  /**
   * Event handler for form submit button
   */
  handleSubmit = e => {
    e.preventDefault();

    const { form, templateId, api } = this.props;

    if (!form) {
      console.warn("No `form` prop given.");
      return;
    }

    form.validateFields((err, values) => {
      // console.log("handleSubmit!");
      if (!err) {
        // console.log("Received values of form: ", values);
        const query = queryString.stringify(values);
        const path = templateId + "?" + query;
        // console.log("path: ", path);

        if (!api.templateParser) {
          console.warn("No `api.templateParser` prop given.");
          return;
        }

        api.templateParser.exec("get", { path }, data => {
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

  handleEditButton = () =>
    console.log("handleEditButton()") || this.setState({ mode: EDIT_MODE });

  handleDeleteButton = () =>
    console.log("handleDeleteButton()") || this.setState({ mode: DELETE_MODE });

  handleCancelDelete = () =>
    console.log("handleCancelDelete()") || this.setState({ mode: ACTIVE_MODE });

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

    /**
     * Should utilize React.createContext() API
     */
    return (
      <Presentation
        mode={this.state.mode}
        title={title}
        output={this.state.output}
        handleSubmit={this.handleSubmit}
        handleCopyText={this.handleCopyText}
        handleOutputChange={this.handleOutputChange}
        handleEditButton={this.handleEditButton}
        handleDeleteButton={this.handleDeleteButton}
        handleCancelDelete={this.handleCancelDelete}
      >
        {this.renderInputComponents()}
      </Presentation>
    );
  }
}

ChatTemplateForm.propTypes = {
  inputSchemes: PropTypes.arrayOf(PropTypes.object).isRequired,
  form: PropTypes.object.isRequired,
  templateId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  api: PropTypes.object
};

const FunctionalChatTemplateForm = Form.create()(
  withApi("templateParser")(ChatTemplateForm)
);

export default FunctionalChatTemplateForm;
