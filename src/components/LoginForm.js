import React from "react";
import { Redirect } from "react-router-dom";
import { Card, message } from "antd";
import styled from "styled-components";
import loginFormScheme from "~/src/data/form-schemes/login";
import SchemebasedForm from "~/src/components/SchemebasedForm";
import { withAuth } from "~/src/services/auth";

const StyledCard = styled(Card)`
  min-width: 300px;
`;

class LoginForm extends React.Component {
  state = {
    loading: false
  };

  handleSubmit = (values, allProps) => {
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
      <StyledCard>
        <SchemebasedForm
          handleSubmit={this.handleSubmit}
          defaultFieldSchemes={loginFormScheme}
          submitText="Login"
          submitButtonProps={{
            loading: this.state.loading
          }}
        />
      </StyledCard>
    );
  }
}

const NeedAuthLoginForm = ({ isAuth, login }) =>
  isAuth ? <Redirect to="/" /> : <LoginForm loginCallback={login} />;

export default withAuth(NeedAuthLoginForm);
