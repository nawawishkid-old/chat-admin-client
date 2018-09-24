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
    // console.log("fieldScheme: ", fieldScheme);
    const { name, label, componentScheme, options, ...rest } = fieldScheme;
    const theOptions = options || {};

    if (!componentScheme) {
      console.warn("componentScheme should not be null");
      return <b key="error">No template's input available</b>;
    }

    const { props } = componentScheme;

    // Remove props.defaultValue then assign to options.initialValue.
    // The way Ant Design's field decorator works.
    if (props.hasOwnProperty("defaultValue")) {
      theOptions.initialValue = props.defaultValue;
      delete props.defaultValue;
    }

    // ('form.componentScheme: ', componentScheme);

    const theChild = FormBuilder.makeChildOfField(componentScheme);

    return (
      <CommonField
        name={name}
        label={label}
        key={name}
        form={form}
        options={theOptions}
        {...rest}>
        {theChild}
      </CommonField>
    );
  };

  static makeChildOfField = componentScheme => {
    const { type, props, options, icon } = componentScheme;
    const TheComponent = FormBuilder.getAntdComponent(type);
    let children = null;

    if (type === "select" && Array.isArray(options)) {
      const { Option } = Select;
      children = options.map((optionScheme, index) => (
        <Select.Option value={optionScheme._id} key={optionScheme._id}>
          {optionScheme.label}
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

/**
 * Create `antd` filed decorator from specific data structure
 *
 * @param {Object} scheme
 * @param {String} scheme.id ID of template form's filed
 * @param {Object} scheme.options Optional configuration of the field, uses for `antd` filed decorator
 * @param {Object} scheme.component Object contains data for generating React.Component
 * @returns {Object} `antd` field's decorator object
 */
const makeAntdFieldDecorator = scheme => {
  const { name, componentScheme } = scheme;
  const props = componentScheme.hasOwnProperty("props")
    ? componentScheme.props
    : {};
  const decorator = {
    id: name,
    options: scheme.options || {},
  };
  let selectOptions = null,
    TheInput;

  switch (componentScheme.type) {
    case "number":
      TheInput = InputNumber;
      break;
    case "select":
      TheInput = Select;
      break;
    default:
      TheInput = Input;
  }

  if (Array.isArray(componentScheme.options)) {
    selectOptions = componentScheme.options.map((item, index) => {
      return (
        <Select.Option value={item.value} key={index}>
          {item.name}
        </Select.Option>
      );
    });
  }

  if (props.defaultValue !== undefined) {
    decorator.options.initialValue = props.defaultValue;
    delete props.defaultValue;
  }

  decorator.component = <TheInput {...props}>{selectOptions}</TheInput>;

  return decorator;
};

const form = { withForm, FormBuilder, makeAntdFieldDecorator };

export { withForm, FormBuilder, form, makeAntdFieldDecorator };

export default form;
