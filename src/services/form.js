import React from "react";
import { Input, InputNumber, Select } from "antd";
import { CommonForm, CommonField } from "~/src/components/common/form";

export class FormBuilder {
  static build = formScheme => {
    const { fields } = formScheme;

    return props => (
      <CommonForm {...props}>
        {fields.map(field => FormBuilder.makeField(field))}
      </CommonForm>
    );
  };

  static makeField = fieldScheme => {
    const { name, label, componentScheme, ...rest } = fieldScheme;
    const theChild = FormBuilder.makeChildOfField(componentScheme);

    return (
      <CommonField name={name} label={label} key={name} {...rest}>
        {theChild}
      </CommonField>
    );
  };

  static makeChildOfField = componentScheme => {
    const { type, props, options } = componentScheme;
    const TheComponent = FormBuilder.getAntdComponent(type);
    let children = null;

    if (type === "select" && Array.isArray(options)) {
      children = options.map((option, index) => (
        <Select.Option value={option.value} key={index}>
          {option.text}
        </Select.Option>
      ));
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

      default:
        theComponent = Input;
        break;
    }

    return theComponent;
  };
}

export default FormBuilder;
