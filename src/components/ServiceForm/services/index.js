import React from "react";
import ServiceForm from "../index";
import { Select } from "antd";

export const withGenderInput = props => {
  return class extends React.Component {
    render() {
      const genderInput = (
        <Select name="gender" defaultValue="male">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      );
      const newProps = {
        ...this.props,
        inputs: [...(this.props.inputs || []), genderInput]
      };

      return <ServiceForm {...newProps} />;
    }
  };
};

export const withRequest = (Component, props) => (
  <ServiceForm
    request={{
      method: "get",
      url: `http://localhost:11111/services/${props.serviceSlug}.php`,
      onSuccess: (data, parent) => {
        parent.output.current.textAreaRef.value = data.data[props.dataKey];

        return {
          output: data.data[props.dataKey],
          errorText: ""
        };
      },
      onError: (err, parent) => {
        let msg;

        if (err.response) {
          msg = err.response.data.errors;
        } else if (err.request) {
          msg = "Error with HTTP Request";
          console.log(err.request);
        } else {
          msg = err.message;
        }

        console.log(msg);
        console.log(err.config);

        return { errorText: msg };
      }
    }}
  />
);
