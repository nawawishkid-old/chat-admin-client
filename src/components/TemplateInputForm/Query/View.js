import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "antd";
import ActionEdit from "./ActionEdit";
import ActionDelete from "./ActionDelete";

const TemplateInputFormQueryView = ({ input, handleDeleted }) => (
  <Card
    actions={[
      <ActionEdit templateInputId={input._id} />,
      <ActionDelete templateInputId={input._id} handleDeleted={handleDeleted} />
    ]}>
    <h3>{input.label}</h3>
    <p>{"name: " + input.name}</p>
    {input.options ? <Options input={input} /> : <NoOptions />}
    {input.componentScheme ? (
      <ComponentScheme scheme={input.componentScheme} />
    ) : null}
  </Card>
);

TemplateInputFormQueryView.propTypes = {
  input: PropTypes.object.isRequired,
  handleDeleted: PropTypes.func.isRequired
};

const Options = ({ input }) => (
  <div>
    <p>Options:</p>
    {Object.keys(input.options).map((key, index) => (
      <p>
        <span>{key}</span>
        <span>{input.options[key]}</span>
      </p>
    ))}
  </div>
);

Options.propTypes = {
  input: PropTypes.object.isRequired
};

const NoOptions = () => <p>Options: none</p>;

const ComponentScheme = ({ scheme }) => (
  <div>
    <p>Type: {scheme.type}</p>
    <p>
      Props: <code>{JSON.stringify(scheme.props)}</code>
    </p>
  </div>
);

ComponentScheme.propTypes = {
  scheme: PropTypes.object.isRequired
};

export { TemplateInputFormQueryView };

export default TemplateInputFormQueryView;
