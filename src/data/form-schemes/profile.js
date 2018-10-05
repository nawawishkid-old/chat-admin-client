const commonOptions = {
  rules: [{ required: true, message: "This field is required." }]
};

const nameFieldScheme = {
  options: { ...commonOptions },
  name: "name",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Name"
    },
    icon: "user"
  }
};

const defaultFieldSchemes = [nameFieldScheme];

export { nameFieldScheme };

export default defaultFieldSchemes;
