const prefixId = "input_componentScheme_props_";

const defaultValueScheme = {
  label: "Default value",
  _id: prefixId + "defaultValue",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Default Value"
    }
  }
};

export { defaultValueScheme };

export default [defaultValueScheme];
