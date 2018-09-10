const prefixId = "TemplateInputBuilder_";
const requireMsg = "This field is required";
const idFieldScheme = {
  label: "ID",
  id: prefixId + "id",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Input ID"
    }
  }
};
const labelFieldScheme = {
  label: "Label",
  id: prefixId + "label",
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
const componentTypeFieldScheme = {
  label: "Component Type",
  id: prefixId + "componentType",
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

export { idFieldScheme, labelFieldScheme, componentTypeFieldScheme };
