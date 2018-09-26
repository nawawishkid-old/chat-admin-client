const prefixId = "props_";

const minScheme = {
  label: "Min",
  name: prefixId + "min",
  options: {},
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Minimum value",
    },
  },
};

const maxScheme = {
  label: "Max",
  name: prefixId + "max",
  options: {},
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Maximum value",
    },
  },
};

const defaultValueScheme = {
  label: "Default value",
  name: prefixId + "defaultValue",
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Default Value",
    },
  },
};

const stepScheme = {
  label: "Step",
  name: prefixId + "step",
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Step",
    },
  },
};

export { minScheme, maxScheme, defaultValueScheme, stepScheme };

export default [minScheme, maxScheme, defaultValueScheme, stepScheme];
