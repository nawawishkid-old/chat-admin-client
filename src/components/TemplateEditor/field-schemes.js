const prefixId = "input_";
const requireMsg = "This field is required";
const nameFieldScheme = {
  label: "Name",
  name: "name",
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
  name: "content",
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
  name: "openTag",
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
  name: "closingTag",
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
  name: "inputs",
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
