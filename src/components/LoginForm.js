import React from "react";
import { Redirect } from "react-router-dom";
import loginFormScheme from "~/src/data/form-schemes/login";
import { FormBuilder } from "~/src/services/form";
import { withAuth } from "~/src/services/auth";

const getHandleSubmit = login => (props, values) => {
  console.log("props: ", props, "values: ", values);
  login({ username: values.username, password: values.password });
};

const NoAuthLoginForm = FormBuilder.build(loginFormScheme);
const NeedAuthLoginForm = ({ isAuth, login }) =>
  isAuth ? (
    <Redirect to="/" />
  ) : (
    <NoAuthLoginForm handleSubmit={getHandleSubmit(login)} />
  );

export default withAuth(NeedAuthLoginForm);
