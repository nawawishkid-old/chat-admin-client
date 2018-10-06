import React from "react";
import PropTypes from "prop-types";
import { Input, InputNumber, Select } from "antd";

const getAntdComponent = type => {
  let theComponent;

  switch (type) {
    case "text":
      theComponent = Input;
      break;

    case "number":
      theComponent = InputNumber;
      break;

    case "select":
      theComponent = Select;
      break;

    case "password":
      theComponent = makePasswordInput();
      break;

    default:
      theComponent = Input;
      break;
  }

  return theComponent;
};

const FieldInput = ({ componentScheme, ...rest }) => {
  const { type, props, options, icon, ...restScheme } = componentScheme;
  const TheComponent = getAntdComponent(type);
  let children = null;

  // For componentScheme with 'select' type
  if (type === "select" && Array.isArray(options)) {
    const { Option } = Select;

    children = options.map((option, index) => (
      <Select.Option value={option.value} key={option.value}>
        {option.label}
      </Select.Option>
    ));
  }

  if (typeof icon === "string") {
    props.prefix = <Icon type={icon} />;
  }

  return (
    <TheComponent {...props} {...restScheme} {...rest}>
      {children}
    </TheComponent>
  );
};

FieldInput.propTypes = {
  componentScheme: PropTypes.object.isRequired
};

export { FieldInput };

export default FieldInput;
