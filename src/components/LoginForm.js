import React from "react";
import { Redirect } from "react-router-dom";
import { Card, message } from "antd";
import styled from "styled-components";
import loginFormScheme from "~/src/data/form-schemes/login";
import SchemebasedForm from "~/src/components/SchemebasedForm";
import { FormBuilder } from "~/src/services/form";
import { withAuth } from "~/src/services/auth";

class LoginForm extends React.Component {
  state = {
    loading: false
  };

  handleSubmit = (values, allProps) => {
    // console.log(this.props.loginCallback);
    this.props.loginCallback(
      { username: values.username, password: values.password },
      (err, res) => {
        if (err) {
          console.log(err);
          message.error("Unauthenticated");
          this.setState({ loading: false });

          return;
        }

        message.success("Authenticated");
      }
    );

    this.setState({ loading: true });
  };

  render() {
    return (
      <SchemebasedForm
        handleSubmit={this.handleSubmit}
        defaultFieldSchemes={loginFormScheme}
        submitText="Login"
        submitButtonProps={{
          loading: this.state.loading
        }}
      />
    );
  }
}
const NoAuthLoginForm = FormBuilder.build(loginFormScheme);
const StyledCard = styled(Card)`
  padding: 1em;
  min-width: 250px;
`;
const NeedAuthLoginForm = ({ isAuth, login }) =>
  isAuth ? (
    <Redirect to="/" />
  ) : (
    <StyledCard>
      <LoginForm loginCallback={login} />
    </StyledCard>
  );

export default withAuth(NeedAuthLoginForm);
