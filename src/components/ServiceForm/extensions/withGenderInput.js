import React from "react";
import { Select } from "antd";

const withGenderInput = Component => {
  return class extends React.Component {
    render() {
      const genderInput = (
        <Select name="gender" defaultValue="male">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      );
      const props = {
        ...this.props,
        inputs: [genderInput, ...(this.props.inputs || [])]
      };

      return <Component {...props} />;
    }
  };
};

export default withGenderInput;
