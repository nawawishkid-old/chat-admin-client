import React from "react";
import PropTypes from "prop-types";
import { templateInputApi } from "~/src/api";
import loadable from "~/src/components/Loadable";
import Field from "~/src/components/SchemebasedForm/Field";

const selectFieldScheme = {
  name: "inputs",
  options: {
    rules: [{ required: true, message: "This field is required" }]
  },
  componentScheme: {
    type: "select",
    props: {
      placeholder: "Inputs",
      mode: "multiple"
    }
  }
};

const HTMLSelect = ({ templateInputs, form, initialValues, ...rest }) => {
  const inputs = Array.isArray(templateInputs)
    ? templateInputs
    : [templateInputs];

  const clonedFieldScheme = { ...selectFieldScheme };

  clonedFieldScheme.options.initialValue = initialValues;
  clonedFieldScheme.componentScheme.options = inputs.map(input => ({
    value: input._id,
    label: input.label
  }));

  return <Field fieldScheme={clonedFieldScheme} form={form} />;
};

HTMLSelect.propTypes = {
  templateInputs: PropTypes.any.isRequired,
  form: PropTypes.object.isRequired
  // initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const LoadableHTMLSelect = loadable(({ data, ...rest }) => (
  <HTMLSelect templateInputs={data} {...rest} />
));

// Load all template inputs
const handleHTMLSelectLoad = load => {
  templateInputApi.get("get").call((err, res, status) => {
    const templateInputs = status === 404 ? [] : res.data.templateInputs;

    load(templateInputs);
  });
};
const WrappedLoadableHTMLSelect = props => (
  <LoadableHTMLSelect handleLoad={handleHTMLSelectLoad} {...props} />
);

export default WrappedLoadableHTMLSelect;
