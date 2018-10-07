import React from "react";
import { Card, message } from "antd";
import styled from "styled-components";
import defaultFieldSchemes from "~/src/data/form-schemes/signup";
import SchemebasedForm from "~/src/components/SchemebasedForm";
import userApi from "~/src/api/user";

const StyledCard = styled(Card)`
  min-width: 300px;
`;

class SignupForm extends React.Component {
  state = {
    loading: false,
    hasRegistered: false
  };

  handleSubmit = (values, allProps) => {
    console.log("values: ", values);
    const options = {
      data: values
    };

    userApi.get("create").call(options, (err, res) => {
      if (err) {
        console.log(err);

        message.error(err.data.msg);

        this.setState({ loading: false });

        return;
      }

      message.success("Registered!");

      this.setState({ loading: false, hasRegistered: true });
    });
  };

  render() {
    return this.state.hasRegistered ? (
      <Redirect to="/login" />
    ) : (
      <StyledCard>
        <SchemebasedForm
          handleSubmit={this.handleSubmit}
          defaultFieldSchemes={defaultFieldSchemes}
          submitText="Signup"
          submitButtonProps={{
            loading: this.state.loading
          }}
        />
      </StyledCard>
    );
  }
}

export { SignupForm };

export default SignupForm;
