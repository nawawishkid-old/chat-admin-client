import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Skeleton, Icon } from "antd";

const ACTIVE_MODE = 1;
const EDIT_MODE = 2;
const DELETE_MODE = 3;

const Wrapper = styled(Card)`
  max-width: 250px;
  padding: 1em;
`;
const InputWrapper = styled.div`
  padding-top: 1em;
`;
const OutputWrapper = InputWrapper;
const ControllerWrapper = InputWrapper;

const EditButton = ({ handleClick }) => (
  <Icon type="edit" onClick={handleClick} />
);
const DeleteButton = ({ handleClick }) => (
  <Icon type="delete" onClick={handleClick} />
);

const ActiveView = props => {
  const {
    title,
    output,
    handleSubmit,
    handleCopyText,
    handleOutputChange,
    children
  } = props;

  return (
    <div>
      <h3 className="chat-template-form__title">{title}</h3>
      <Form layout="horizontal">
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
    </div>
  );
};

const EditView = ({ templateId }) => {
  // console.log("props: ", props);
  return <Redirect to={"/admin/template/edit/" + templateId} />;
  // return <pre>{"<EditView /> here!"}</pre>;
};

const DeleteView = ({ handleCancelDelete, handleDelete }) => {
  return (
    <div>
      <h3>Are you sure, you want to delete this template?</h3>
      <p>
        <Button onClick={handleCancelDelete}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </p>
    </div>
  );
};

const findView = (mode, props) => {
  if (mode === ACTIVE_MODE) {
    const {
      title,
      output,
      handleSubmit,
      handleCopyText,
      handleOutputChange,
      children
    } = props;

    return (
      <ActiveView
        title={title}
        output={output}
        handleSubmit={handleSubmit}
        handleCopyText={handleCopyText}
        handleOutputChange={handleOutputChange}
      >
        {children}
      </ActiveView>
    );
  }

  if (mode === EDIT_MODE) {
    const { templateId } = props;
    return <EditView templateId={templateId} />;
  }

  if (mode === DELETE_MODE) {
    const { handleCancelDelete, handleDelete } = props;
    return (
      <DeleteView
        handleCancelDelete={handleCancelDelete}
        handleDelete={handleDelete}
      />
    );
  }

  return "Error occured!";
};

const ChatTemplateForm = props => {
  const { mode, handleEditButton, handleDeleteButton, ...rest } = props;
  const actions =
    mode === ACTIVE_MODE
      ? [
          <EditButton handleClick={handleEditButton} />,
          <DeleteButton handleClick={handleDeleteButton} />
        ]
      : null;
  let view = findView(mode, rest);

  return (
    <Wrapper className="chat-template-form__wrapper" actions={actions}>
      {view}
    </Wrapper>
  );
};

ChatTemplateForm.propTypes = {
  title: PropTypes.string.isRequired,
  output: PropTypes.string,
  templateId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleSubmit: PropTypes.func,
  handleCopyText: PropTypes.func,
  handleOutputChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default ChatTemplateForm;
