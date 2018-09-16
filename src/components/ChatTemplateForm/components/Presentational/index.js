import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Form, Input, Button, Card, Skeleton, Icon } from "antd";

const Wrapper = styled(Card)`
  max-width: 250px;
  padding: 1em;
`;
const InputWrapper = styled.div`
  padding-top: 1em;
`;
const OutputWrapper = InputWrapper;
const ControllerWrapper = InputWrapper;

const ChatTemplateForm = props => {
  const {
    title,
    output,
    handleSubmit,
    handleCopyText,
    handleOutputChange,
    children,
    ...rest
  } = props;

  return (
    <Wrapper
      className="chat-template-form__wrapper"
      actions={[
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Icon type="ellipsis" />
      ]}
    >
      <h3 className="chat-template-form__title">{title}</h3>
      <Form layout="horizontal" {...rest}>
        <InputWrapper className="chat-template-form__sec-inputs">
          {children}
        </InputWrapper>
        <OutputWrapper className="chat-template-form__sec-output">
          <Form.Item>
            <Input.TextArea
              name="ChatTemplateOutput"
              placeholder="Output"
              value={output}
              onChange={handleOutputChange}
            />
          </Form.Item>
        </OutputWrapper>
        <ControllerWrapper className="chat-template-form__sec-controller">
          <Button onClick={handleSubmit}>Get</Button>
          <Button onClick={handleCopyText}>Copy</Button>
        </ControllerWrapper>
      </Form>
    </Wrapper>
  );
};

ChatTemplateForm.propTypes = {
  title: PropTypes.string.isRequired,
  output: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleCopyText: PropTypes.func,
  handleOutputChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default ChatTemplateForm;
