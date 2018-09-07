import React from "react";
import styled from "styled-components";
import { Form as AntdForm, Icon, Input, Button, Checkbox } from "antd";
import { AuthConsumer } from "../contexts/Auth";
import { withConsumer } from "../contexts/utils";

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

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

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
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please input your username!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
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
const WithAuthConsumer = withConsumer(AuthConsumer, ({ login }) => (
  <WrappedLoginForm onSubmit={formData => login(formData)} />
));

export default WithAuthConsumer;
