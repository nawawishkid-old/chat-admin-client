const required = { required: true, message: "This field is required" };

export const usernameFieldScheme = {
  name: "username",
  label: "Username",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Username"
    },
    icon: 'user'
  }
};

export const passwordFieldScheme = {
  name: "password",
  label: "Password",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "password",
    props: {
      placeholder: "Password"
    },
    icon: 'lock'
  }
};

export default [usernameFieldScheme, passwordFieldScheme];

