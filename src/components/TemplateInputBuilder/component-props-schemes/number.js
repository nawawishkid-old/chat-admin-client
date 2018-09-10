const prefixId = "templateInputNumberProps_";
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

export { minScheme, maxScheme };
