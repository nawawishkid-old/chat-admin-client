import React from "react";
import PropTypes from "prop-types";
import {
  nameFieldScheme,
  labelFieldScheme
} from "~/src/data/form-schemes/template-input";
import SchemebasedForm, {
  makeComponentScheme,
  withProps
} from "~/src/components/SchemebasedForm";
import {
  ComponentTypeSelector,
  ComponentPropsPanel
} from "./ComponentTypeField";

/**
 * A based form for creating and editing new template input
 */
class TemplateInputFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentType: this.getInitialComponentType()
    };
  }

  getInitialComponentType = () => {
    const { doc } = this.props;

    return doc ? doc.componentScheme.type : "text";
  };

  handleSubmit = values => {
    const { handleSubmit } = this.props;
    const { name, label } = values;
    const componentScheme = makeComponentScheme(values);
    const data = {
      name,
      label,
      componentScheme
    };
    const options = { data };

    handleSubmit(options, values, this.props);
  };

  handleCancel = () => {
    this.props.handleCancel(this.props);
  };

  getInitialInputProps = () => {
    const { componentScheme } = this.props.doc;
    const { type, options, props } = componentScheme;

    return type === "select" ? options : props;
  };

  render() {
    const { componentType } = this.state;
    const { doc, handleSubmit, handleCancel } = this.props;
    const initialInputProps = doc ? this.getInitialInputProps() : undefined;

    return (
      <SchemebasedForm
        defaultFieldSchemes={defaultFieldSchemes}
        handleSubmit={this.handleSubmit}
        cancelText="Cancel"
        handleCancel={handleCancel ? this.handleCancel : undefined}
        after={after}
        componentType={componentType}
        initialInputProps={initialInputProps}
        doc={doc}
        onComponentTypeChange={value => this.setState({ componentType: value })}
      />
    );
  }
}

TemplateInputFormBase.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func,
  doc: PropTypes.object // Object of templateInput scheme document from database.
};

const TypeSelector = withProps(
  ({ componentType, onComponentTypeChange, form }) => (
    <ComponentTypeSelector
      type={componentType}
      onChange={onComponentTypeChange}
      form={form}
    />
  )
);
const PropsPanel = withProps(({ componentType, initialInputProps, form }) => (
  <ComponentPropsPanel
    componentType={componentType}
    initialValues={initialInputProps}
    form={form}
  />
));

const after = [<TypeSelector />, <PropsPanel />];

const defaultFieldSchemes = [nameFieldScheme, labelFieldScheme];

export { TemplateInputFormBase };

export default TemplateInputFormBase;
