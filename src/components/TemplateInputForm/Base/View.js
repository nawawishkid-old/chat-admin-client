import React from "react";
import PropTypes from "prop-types";
import {
  ComponentTypeSelector,
  ComponentPropsPanel
} from "./ComponentTypeField";
import SchemebasedFormView from "~/src/components/SchemebasedForm/View";

const TemplateInputFormBuilderView = props => {
  const {
    fieldSchemes,
    componentType,
    initialInputProps,
    onComponentTypeChange,
    ...rest
  } = props;

  const TypeSelector = ({ form }) => (
    <ComponentTypeSelector
      type={componentType}
      onChange={value => onComponentTypeChange(value)}
      form={form}
    />
  );
  const PropsPanel = ({ form }) => (
    <ComponentPropsPanel
      componentType={componentType}
      initialValues={initialInputProps}
      form={form}
    />
  );
  const after = [<TypeSelector />, <PropsPanel />];

  return (
    <SchemebasedFormView fieldSchemes={fieldSchemes} after={after} {...rest} />
  );
};

TemplateInputFormBuilderView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  componentType: PropTypes.string.isRequired,
  onComponentTypeChange: PropTypes.func.isRequired,
  fieldSchemes: PropTypes.arrayOf(PropTypes.object),
  initialInputProps: PropTypes.any // Too busy to find what it actually is, so, any is allowed.
};

export { TemplateInputFormBuilderView };

export default TemplateInputFormBuilderView;
