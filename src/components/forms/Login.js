import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Form as AntdForm, Button } from "antd";
import { AuthConsumer } from "../contexts/Auth";
import { withConsumer } from "../contexts/utils";
import {
  usernameDecorator,
  passwordDecorator,
  checkBoxDecorator
} from "../forms/decorator";

const FormItem = AntdForm.Item;
const Form = styled(AntdForm)`
  && { 
    padding: 1em;
    border: .5px solid #ccc
  }
`;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("handleSubmit!");
      if (!err) {
        console.log("Received values of form: ", values);
        // Signup mechanism here!
        this.props.onSubmit(values);
      }
    });
  };

  getDecorator = decorObject => {
    const Component = decorObject.component;

    return this.props.form.getFieldDecorator(
      decorObject.id,
      decorObject.options || null
    )(<Component />);
  };

  render() {
    const { getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched("username") && getFieldError("username");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={usernameError ? "error" : ""}
          help={usernameError || ""}
        >
          {this.getDecorator(usernameDecorator)}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {this.getDecorator(passwordDecorator)}
        </FormItem>
        <FormItem>{this.getDecorator(checkBoxDecorator)}</FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Login
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = AntdForm.create()(LoginForm);
const WithAuthConsumer = withConsumer(
  AuthConsumer,
  ({ isAuth, login }) =>
    isAuth ? (
      <Redirect to="/" />
    ) : (
      <WrappedLoginForm onSubmit={formData => login(formData)} />
    )
);

export default WithAuthConsumer;
