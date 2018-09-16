import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Form, Input, Button, Card, Skeleton, Icon } from "antd";

const Wrapper = styled(Card)`
  max-width: 250px;
  padding: 1em;
`;

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
      <p className="chat-template-form__title">{title}</p>
      <Form layout="horizontal" {...rest}>
        <div className="chat-template-form__sec-inputs">{children}</div>
        <div className="chat-template-form__sec-output">
          <Form.Item>
            <Input.TextArea
              name="ChatTemplateOutput"
              placeholder="Output"
              value={output}
              onChange={handleOutputChange}
            />
          </Form.Item>
        </div>
        <div className="chat-template-form__sec-controller">
          <Button onClick={handleSubmit}>Get</Button>
          <Button onClick={handleCopyText}>Copy</Button>
        </div>
      </Form>
    </Wrapper>
  );
};

ChatTemplateForm.propTypes = {
  title: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  handleCopyText: PropTypes.func,
  handleOutputChange: PropTypes.func
};

export default ChatTemplateForm;
