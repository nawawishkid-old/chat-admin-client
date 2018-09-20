const required = { required: true, message: "This field is required" };

export const nameFieldScheme = {
  name: "name",
  label: "Name",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Name"
    }
  }
};

export const contentFieldScheme = {
  label: "Content",
  name: "content",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Content"
    }
  }
};

export const openTagFieldScheme = {
  label: "Open tag",
  name: "openTag",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Open tag"
    }
  }
};

export const closingTagFieldScheme = {
  label: "Closing tag",
  name: "closingTag",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Closing tag"
    }
  }
};

export const inputsFieldScheme = {
  label: "Inputs",
  name: "inputs",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "select",
    props: {
      placeholder: "Inputs"
    },
    options: [
      { text: "Choose me!", value: "1" },
      { text: "Choose me!", value: "2" }
    ]
  }
};

const fieldSchemes = [
  nameFieldScheme,
  contentFieldScheme,
  openTagFieldScheme,
  closingTagFieldScheme,
  inputsFieldScheme
];

const templateFormBuilderScheme = {
  fields: fieldSchemes
};

export { templateFormBuilderScheme };

export default templateFormBuilderScheme;
