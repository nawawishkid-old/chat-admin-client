const required = { required: true, message: "This field is required" };

const template = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

export default template;

// export {
//   name,
//   contentFieldScheme,
//   openTagFieldScheme,
//   closingTagFieldScheme,
//   inputsFieldScheme
// };

// export default [
//   nameFieldScheme,
//   contentFieldScheme,
//   openTagFieldScheme,
//   closingTagFieldScheme
// ];

// };
