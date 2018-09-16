const prefixId = "input_";
const requireMsg = "This field is required";
const nameFieldScheme = (options = {}) => ({
  label: "Name",
  _id: prefixId + "name",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: options.defaultValue || undefined
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Template name"
    }
  }
});
const contentFieldScheme = (options = {}) => ({
  label: "Content",
  _id: prefixId + "content",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: options.defaultValue || undefined
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Content"
    }
  }
});
const openTagFieldScheme = (options = {}) => ({
  label: "Open tag",
  _id: prefixId + "openTag",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: options.defaultValue || undefined
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Open tag"
    }
  }
});
const closingTagFieldScheme = (options = {}) => ({
  label: "Closing tag",
  _id: prefixId + "closingTag",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: options.defaultValue || undefined
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Closing tag"
    }
  }
});
const inputsFieldScheme = (options = {}) => ({
  label: "Inputs",
  _id: prefixId + "inputs",
  options: {
    rules: [{ required: true, message: requireMsg }],
    initialValue: options.defaultValue || undefined
  },
  componentScheme: {
    type: "select",
    props: {
      placeholder: "Inputs"
    }
  }
});

export {
  nameFieldScheme,
  contentFieldScheme,
  openTagFieldScheme,
  closingTagFieldScheme,
  inputsFieldScheme
};

export default [
  nameFieldScheme,
  contentFieldScheme,
  openTagFieldScheme,
  closingTagFieldScheme
];
