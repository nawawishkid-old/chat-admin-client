import React from "react";
import { Form, Input, InputNumber, Select, Icon } from "antd";
import { CommonForm, CommonField } from "~/src/components/common/form";

const withForm = Component => Form.create()(Component);

class FormBuilder {
  static build = formScheme => {
    const { fields } = formScheme;

    return props => (
      <CommonForm {...props}>
        {fields.map(field => FormBuilder.makeField(field))}
      </CommonForm>
    );
  };

  static makeField = (fieldScheme, form) => {
    const { name, label, componentScheme, options, ...rest } = fieldScheme;
    const theOptions = options || {};
    const { props } = componentScheme;

    // Remove props.defaultValue then assign to options.initialValue.
    // The way Ant Design's field decorator works.
    if (props.hasOwnProperty("defaultValue")) {
      theOptions.initialValue = props.defaultValue;
      delete props.defaultValue;
    }

    const theChild = FormBuilder.makeChildOfField(componentScheme);

    return (
      <CommonField
        name={name}
        label={label}
        key={name}
        form={form}
        options={theOptions}
        {...rest}
      >
        {theChild}
      </CommonField>
    );
  };

  static makeChildOfField = componentScheme => {
    const { type, props, options, icon } = componentScheme;
    const TheComponent = FormBuilder.getAntdComponent(type);
    let children = null;

    if (type === "select" && Array.isArray(options)) {
      children = options.map((option, index) => (
        <Select.Option value={option.value} key={index}>
          {option.text}
        </Select.Option>
      ));
    }

    if (typeof icon === "string") {
      props.prefix = <Icon type={icon} />;
    }

    return <TheComponent {...props}>{children}</TheComponent>;
  };

  static getAntdComponent = type => {
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
}

const makePasswordInput = () => props => <Input type="password" {...props} />;

const form = { withForm, FormBuilder };

export { withForm, FormBuilder, form };

export default form;
