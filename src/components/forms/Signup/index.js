import React from "react";
import styled from "styled-components";
import { Form as AntdForm, Icon, Input, Button, Checkbox } from "antd";

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

class SignupForm extends React.Component {
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
    const emailError = isFieldTouched("email") && getFieldError("email");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={emailError ? "error" : ""}
          help={emailError || ""}
        >
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Please input your email!"
              },
              {
                type: "email",
                message: "Invalid email address."
              }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
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
            Sign up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignupForm = AntdForm.create()(SignupForm);

export default WrappedSignupForm;
