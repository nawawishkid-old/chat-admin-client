const prefixId = "input_componentScheme_props_";

const minScheme = {
  label: "Min",
  id: prefixId + "min",
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
  id: prefixId + "max",
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
  id: prefixId + "defaultValue",
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Default Value"
    }
  }
};

const stepScheme = {
  label: "Step",
  id: prefixId + "step",
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Step"
    }
  }
};

export { minScheme, maxScheme, defaultValueScheme, stepScheme };

export default [minScheme, maxScheme, defaultValueScheme, stepScheme];
