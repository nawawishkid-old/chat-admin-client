import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import { FormBuilder, makeAntdFieldDecorator } from "~/src/services/form";
import { componentSchemeTypeFieldScheme } from "../field-schemes";
import numberPropsScheme from "./props-schemes/number";
import textPropsScheme from "./props-schemes/text";
import OptionAdder from "~/src/components/TemplateInputForm/components/Option/Adder";

const getComponentPropsFieldSchemes = type => {
  let schemes;

  switch (type) {
    case "number":
      schemes = numberPropsScheme;
      break;
    case "text":
      schemes = textPropsScheme;
      break;
    case "select":
      schemes = [];
      break;

    default:
      break;
  }

  return schemes;
};

const ComponentTypeSelector = ({ form, type, onChange, ...rest }) => {
  componentSchemeTypeFieldScheme.options.initialValue = type;

  const decorator = makeAntdFieldDecorator(componentSchemeTypeFieldScheme);
  const component = React.cloneElement(decorator.component, { onChange });

  // console.log("decorator: ", decorator);

  return (
    <div>
      <Form.Item {...rest}>
        {form.getFieldDecorator(decorator.id, decorator.options)(component)}
      </Form.Item>
    </div>
  );
};

/**
 * Display component's properties panel based on type of component
 */
const ComponentPropsPanel = ({ form, componentType, initialValues }) => {
  if (componentType === "select") {
    return <OptionAdder form={form} options={initialValues} />;
  }

  const schemes = getComponentPropsFieldSchemes(componentType);

  return schemes.length === 0 ? null : (
    <div>
      <p>Component's properties</p>
      <div>
        {schemes.map((scheme, index) => {
          // console.log("scheme: ", scheme);

          if (initialValues) {
            const { componentScheme } = scheme;

            // Ensure that scheme.componentScheme.props exists
            componentScheme.props = componentScheme.props
              ? componentScheme.props
              : {};

            // Exclude field name prefix e.g. props_defaultValue -> defaultValue
            const propKey = scheme.name.split("_")[1];
            const initValue = initialValues[propKey];

            componentScheme.props.defaultValue = initValue;
          }

          return FormBuilder.makeField(scheme, form);
        })}
      </div>
    </div>
  );
};

ComponentPropsPanel.propTypes = {
  form: PropTypes.object,
  componentType: PropTypes.string.isRequired,
  initialValues: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export { ComponentTypeSelector, ComponentPropsPanel };
