import React from "react";
import PropTypes from "prop-types";
import { Form, Card, Input, Button } from "antd";
import styled from "styled-components";
import { FormBuilder } from "~/src/services/form";
import Field from "~/src/components/SchemebasedForm/Field";

const StyledCard = styled(Card)`
  margin-bottom: 2em;
`;

const TemplateFormQueryView = props => {
  // console.log("props: ", props);
  const {
    form,
    name,
    output,
    handleSubmit,
    handleCopy,
    handleOutputChange,
    templateInputs,
    actions,
    children
  } = props;

  return (
    <StyledCard actions={actions}>
      <Form>
        <div className="header">
          <h3>{name}</h3>
        </div>
        <div className="inputs">
          {templateInputs.map((input, index) => (
            <Field fieldScheme={input} form={form} key={index} />
          ))}
          {children}
        </div>
        <div className="output">
          <Input.TextArea value={output} onChange={handleOutputChange} />
        </div>
        <div className="controller">
          <p>
            <Button onClick={handleSubmit}>Get</Button>
            <Button onClick={handleCopy}>Copy</Button>
          </p>
        </div>
      </Form>
    </StyledCard>
  );
};

TemplateFormQueryView.propTypes = {
  name: PropTypes.string.isRequired,
  templateInputs: PropTypes.array.isRequired,
  output: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  handleOutputChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired
};

export default TemplateFormQueryView;
