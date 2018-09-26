const commonOptions = {
  rules: [{ required: true, message: "This field is required." }]
};

const usernameFieldScheme = {
  options: { ...commonOptions },
  name: "username",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Username"
    },
    icon: "user"
  }
};

const emailFieldScheme = {
  options: { ...commonOptions },
  name: "email",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Email"
    },
    icon: "mail"
  }
};

const defaultFieldSchemes = [usernameFieldScheme, emailFieldScheme];

export { usernameFieldScheme, emailFieldScheme };

export default defaultFieldSchemes;
