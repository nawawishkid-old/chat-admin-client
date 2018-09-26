import React from "react";
import PropTypes from "prop-types";
import { CommonForm } from "~/src/components/common/form";
import { FormBuilder } from "~/src/services/form";
import Form from "./Form";

const renderChildren = children =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, { key: index })
  );

const SchemebasedFormView = ({ fieldSchemes, before, after }) => (
  <Form>
    {renderChildren(before)}
    {fieldSchemes.map(scheme => FormBuilder.makeField(scheme))}
    {renderChildren(after)}
  </Form>
);

SchemebasedFormView.propTypes = {
  fieldSchemes: PropTypes.arrayOf(PropTypes.object).isRequired,
  before: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  after: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export { SchemebasedFormView };

export default SchemebasedFormView;
