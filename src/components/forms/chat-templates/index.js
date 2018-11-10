import React from "react";
import styled from "styled-components";
import { Form, Input as AntdInput, Button } from "antd";
import { Input } from "./components/Input";
import templateParserApi from "~/src/services/api/templateParser";
import queryString from "querystring";

const Wrapper = styled.div`
  padding: 1em;
`;

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
      if (!err) {
        // Fetch API and setState here!
        const query = queryString.stringify(values);
        const path = templateId + "?" + query;
        
				templateParserApi.exec("get", { path }, data => {
          this.setState({ output: data.content });
        });
      }
    });
  };

  /**
   * Copy output text to clipboard
   */
  handleCopyText = () => {
    const textArea = document.createElement("textarea");

    textArea.innerText = this.state.output;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  };

  /**
   * Generate and return template's input field from `inputSchemes`
   *
   * @return {Input} Template's input field component.
   */
  getInputs = () =>
    this.props.inputSchemes.map((scheme, index) => {
      const { label, name, options, componentScheme } = scheme;

      return (
        <Input
          label={label}
          _id={name}
          options={options}
          componentScheme={componentScheme}
          form={this.props.form}
          key={index}
        />
      );
    });

  render() {
    const {
      title,
      children,
      form,
      inputSchemes,
      templateId,
      ...rest
    } = this.props;

    return (
      <Wrapper className="chat-template-form__wrapper">
        <p className="chat-template-form__title">{title}</p>
        <Form layout="horizontal" {...rest}>
          <div className="chat-template-form__sec-inputs">
            {this.getInputs()}
          </div>
          <div className="chat-template-form__sec-output">
            <Form.Item>
              <AntdInput.TextArea
                name="ChatTemplateOutput"
                placeholder="Output"
                value={this.state.output}
                onChange={e => this.setState({ output: e.target.value })}
              />
            </Form.Item>
          </div>
          <div className="chat-template-form__sec-controller">
            <Button onClick={this.handleSubmit}>Get</Button>
            <Button onClick={this.handleCopyText}>Copy</Button>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

const WrappedChatTemplateForm = Form.create()(ChatTemplateForm);

export { Input };

export default WrappedChatTemplateForm;

/*
<ChatTemplateForm>
  <Input id={} options={} componentScheme={} />
  <Controller id={} options={} componentScheme={} />
</ChatTemplateForm>
*/
