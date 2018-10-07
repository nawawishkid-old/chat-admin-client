import React from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import { componentSchemeTypeFieldScheme } from "../field-schemes";
import numberPropsScheme from "./props-schemes/number";
import textPropsScheme from "./props-schemes/text";
import Field from "~/src/components/SchemebasedForm/Field";
import FieldInput from "~/src/components/SchemebasedForm/FieldInput";
import OptionAdder from "./Option/Adder";

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

const ComponentTypeSelector = ({ form, type, onChange }) => {
  componentSchemeTypeFieldScheme.options.initialValue = type;

  const { componentScheme } = componentSchemeTypeFieldScheme;

  return (
    <Field fieldScheme={componentSchemeTypeFieldScheme} form={form}>
      <FieldInput componentScheme={componentScheme} onChange={onChange} />
    </Field>
  );
};

ComponentTypeSelector.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * Display component's properties panel based on type of component
 */
const ComponentPropsPanel = ({ form, componentType, initialValues }) => {
  console.log("initialValues: ", initialValues);
  if (componentType === "select") {
    const initValues = Array.isArray(initialValues) ? initialValues : [];

    return <OptionAdder form={form} options={initValues} />;
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

          return <Field fieldScheme={scheme} form={form} key={index} />;
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
