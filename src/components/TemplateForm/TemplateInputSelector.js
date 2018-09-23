import React from "react";
import PropTypes from "prop-types";
import { Select, Form } from "antd";
import { templateInputApi } from "~/src/api";
import loadable from "~/src/components/Loadable";

// Special component for displaying templates' inputs

const { Option } = Select;
const getFieldOptions = initValue => ({
  initialValue: initValue,
  rules: [{ required: true, message: "This field is required" }],
});
const HTMLSelect = ({ data, form, initialValue, ...rest }) => (
  <Form.Item label="Inputs" key="inputs">
    {form.getFieldDecorator("inputs", getFieldOptions(initialValue))(
      <Select mode="multiple" placeholder="Inputs" {...rest}>
        {data.map((item, index) => (
          <Option value={item._id} key={item._id}>
            {item.label}
          </Option>
        ))}
      </Select>,
    )}
  </Form.Item>
);

HTMLSelect.propTypes = {
  data: PropTypes.any.isRequired,
  form: PropTypes.object.isRequired,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const LoadableHTMLSelect = loadable(HTMLSelect);

LoadableHTMLSelect.propTypes = {
  load: PropTypes.func.isRequired,
};

// Load all template inputs
const handleHTMLSelectLoad = load => {
  templateInputApi.get("get").call((err, res) => {
    if (res) {
      console.log("res: ", res);
      load(res.data.templateInput);
    }
  });
};
const WrappedLoadableHTMLSelect = props => (
  <LoadableHTMLSelect handleLoad={handleHTMLSelectLoad} {...props} />
);

export default WrappedLoadableHTMLSelect;
