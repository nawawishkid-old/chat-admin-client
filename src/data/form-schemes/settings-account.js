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

const defaultFieldSchemes = [
  nameFieldScheme,
  usernameFieldScheme,
  emailFieldScheme
];

export { nameFieldScheme, usernameFieldScheme, emailFieldScheme };

export default defaultFieldSchemes;
