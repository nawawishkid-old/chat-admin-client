const prefixId = "input_componentScheme_props_";

const minScheme = {
  label: "Min",
  _id: prefixId + "min",
  options: {},
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Minimum value"
    }
  }
};

const maxScheme = {
  label: "Max",
  _id: prefixId + "max",
  options: {},
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Maximum value"
    }
  }
};

const defaultValueScheme = {
  label: "Default value",
  _id: prefixId + "defaultValue",
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Default Value"
    }
  }
};

const stepScheme = {
  label: "Step",
  _id: prefixId + "step",
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Step"
    }
  }
};

export { minScheme, maxScheme, defaultValueScheme, stepScheme };

export default [minScheme, maxScheme, defaultValueScheme, stepScheme];
