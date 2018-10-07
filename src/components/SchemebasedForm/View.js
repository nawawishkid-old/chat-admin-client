import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import Field from "./Field";

const renderChildren = children =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, { key: index })
  );

const SchemebasedFormView = ({ fieldSchemes, before, after }) => (
  <Form>
    {before ? renderChildren(before) : null}
    {fieldSchemes.map((scheme, index) => (
      <Field fieldScheme={scheme} key={index} form={{}} />
    ))}
    {after ? renderChildren(after) : null}
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
