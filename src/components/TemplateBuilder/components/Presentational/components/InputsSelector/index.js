import React from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";
import { withApi } from "~/src/services/api";

const PureInputSelector = ({ form, inputSchemes }) => (
  <Form.Item label="Inputs">
    {form.getFieldDecorator("input_inputs", {
      rules: [{ required: true, message: "This field is required." }]
    })(
      <Select mode="multiple" placeholder="Select template's inputs">
        {inputSchemes.map(scheme => (
          <Select.Option key={scheme._id} value={scheme._id}>
            {scheme.label}
          </Select.Option>
        ))}
      </Select>
    )}
  </Form.Item>
);

PureInputSelector.propTypes = {
  form: PropTypes.object.isRequired,
  inputSchemes: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Pure = Form.create()(PureInputSelector);

class InputSelector extends React.Component {
  state = {};

  componentDidMount() {
    this.props.api.templateInput.exec("get", null, res =>
      this.setState({ inputSchemes: res.doc })
    );
  }

  render() {
    const { inputSchemes } = this.state;
    const result =
      inputSchemes === undefined ? (
        <p>Loading...</p>
      ) : (
        <Pure inputSchemes={inputSchemes} />
      );

    return result;
  }
}

export { InputSelector, Pure };

export default withApi("templateInput")(InputSelector);
