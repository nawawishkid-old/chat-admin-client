import React from "react";
import PropTypes from "prop-types";
import { Form, Card, Input, Button } from "antd";
import { FormBuilder } from "~/src/services/form";

const TemplateFormQueryView = props => {
  // console.log("props: ", props);
  const {
    form,
    output,
    handleSubmit,
    handleCopy,
    handleOutputChange,
    fieldSchemes,
    actions,
    children
  } = props;

  return (
    <Card actions={actions}>
      <Form>
        <div className="inputs">
          {fieldSchemes.map(scheme => FormBuilder.makeField(scheme, form))}
          {children}
        </div>
        <div className="output">
          <Input.TextArea defaultValue={output} onChange={handleOutputChange} />
        </div>
        <div className="controller">
          <p>
            <Button onClick={handleSubmit}>Get</Button>
            <Button onClick={handleCopy}>Copy</Button>
          </p>
        </div>
      </Form>
    </Card>
  );
};

TemplateFormQueryView.propTypes = {
  fieldSchemes: PropTypes.array.isRequired,
  output: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  handleOutputChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired
};

export default TemplateFormQueryView;
