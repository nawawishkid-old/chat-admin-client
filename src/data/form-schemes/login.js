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
    }
  }
};

export const passwordFieldScheme = {
  name: "password",
  label: "Password",
  options: {
    rules: [required]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Password"
    }
  }
};

const loginFormScheme = {
  fields: [usernameFieldScheme, passwordFieldScheme]
};

export default loginFormScheme;
