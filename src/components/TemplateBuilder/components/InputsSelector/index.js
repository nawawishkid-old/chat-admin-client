import React from "react";
import { Form, Select } from "antd";
import templateInputApi from "~/src/services/api/templateInput";

class InputSelector extends React.Component {
  state = {};

  componentDidMount() {
    templateInputApi.exec("get", null, res => this.setState({ docs: res.doc }));
  }

  getComponent = () => (
    <Form.Item label="Inputs">
      {this.props.form.getFieldDecorator("input_inputs", {
        rules: [{ required: true, message: "This field is required." }]
      })(
        <Select mode="multiple" placeholder="Select template's inputs">
          {this.state.docs.map((item, index) => (
            <Select.Option key={item._id} value={item._id}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );

  render() {
    const result =
      this.state.docs === undefined ? <p>Loading...</p> : this.getComponent();

    return result;
  }
}

export default InputSelector;
