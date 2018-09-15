const prefixId = "input_";
const requireMsg = "This field is required";
const nameFieldScheme = {
  label: "Name",
  _id: prefixId + "name",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Input name"
    }
  }
};
const labelFieldScheme = {
  label: "Label",
  _id: prefixId + "label",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Input's label"
    }
  }
};
const componentSchemeTypeFieldScheme = {
  label: "Component Type",
  _id: prefixId + "componentScheme_type",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: "text"
  },
  componentScheme: {
    type: "select",
    options: [
      { name: "Select", value: "select" },
      { name: "Text", value: "text" },
      { name: "Number", value: "number" }
    ],
    props: {
      placeholder: "Input's component type"
    }
  }
};

export { nameFieldScheme, labelFieldScheme, componentSchemeTypeFieldScheme };

export default [
  nameFieldScheme,
  labelFieldScheme,
  componentSchemeTypeFieldScheme
];
