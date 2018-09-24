import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { CommonForm } from "~/src/components/common/form";
import { FormBuilder } from "~/src/services/form";
import {
  ComponentTypeSelector,
  ComponentPropsPanel
} from "./ComponentTypeField";

const TemplateInputFormEditorView = props => {
  const {
    children,
    fieldSchemes,
    componentType,
    initialValues,
    handleSubmit,
    onComponentTypeChange
  } = props;

  return (
    <Card>
      <CommonForm handleSubmit={handleSubmit}>
        {fieldSchemes.map(scheme => FormBuilder.makeField(scheme))}
        {children}
        <ComponentTypeSelector
          type={componentType}
          onChange={value => onComponentTypeChange(value)}
        />
        <ComponentPropsPanel
          componentType={componentType}
          initialValues={initialValues}
        />
      </CommonForm>
    </Card>
  );
};

TemplateInputFormEditorView.defaultProps = {
  fieldSchemes: [],
  componentTypes: "text"
};

TemplateInputFormEditorView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  componentType: PropTypes.string.isRequired,
  onComponentTypeChange: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  fieldSchemes: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.element
};

export { TemplateInputFormEditorView };

export default TemplateInputFormEditorView;
