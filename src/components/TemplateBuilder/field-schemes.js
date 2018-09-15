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
      placeholder: "Template name"
    }
  }
};
const contentFieldScheme = {
  label: "Content",
  _id: prefixId + "content",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Content"
    }
  }
};
const openTagFieldScheme = {
  label: "Open tag",
  _id: prefixId + "openTag",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Open tag"
    }
  }
};
const closingTagFieldScheme = {
  label: "Closing tag",
  _id: prefixId + "closingTag",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Closing tag"
    }
  }
};
const inputsFieldScheme = {
  label: "Inputs",
  _id: prefixId + "inputs",
  options: {
    rules: [{ required: true, message: requireMsg }]
  },
  componentScheme: {
    type: "select",
    props: {
      placeholder: "Inputs"
    }
  }
};

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
