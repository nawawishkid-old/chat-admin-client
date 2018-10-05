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
    icon: "user"
  }
};

export const emailFieldScheme = {
  name: "email",
  label: "Email",
  options: {
    rules: [required, { type: "email", message: "Invalid email address" }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Email"
    },
    icon: "mail"
  }
};

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
    },
    icon: "user"
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
    icon: "lock"
  }
};

export default [
  usernameFieldScheme,
  emailFieldScheme,
  nameFieldScheme,
  passwordFieldScheme
];
