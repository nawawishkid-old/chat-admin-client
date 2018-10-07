const requireMsg = "This field is required";
const nameFieldScheme = {
  label: "Name",
  name: "name",
  options: {
    rules: [{ required: true, message: requireMsg }],
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Input name",
    },
  },
};
const labelFieldScheme = {
  label: "Label",
  name: "label",
  options: {
    rules: [{ required: true, message: requireMsg }],
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Input's label",
    },
  },
};
const componentSchemeTypeFieldScheme = {
  label: "Component Type",
  name: "componentScheme_type",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: "text",
  },
  componentScheme: {
    type: "select",
    options: [
      { label: "Select", value: "select" },
      { label: "Text", value: "text" },
      { label: "Number", value: "number" },
    ],
    props: {
      placeholder: "Input's component type",
    },
  },
};

export { nameFieldScheme, labelFieldScheme, componentSchemeTypeFieldScheme };

export default [
  nameFieldScheme,
  labelFieldScheme,
  componentSchemeTypeFieldScheme,
];
