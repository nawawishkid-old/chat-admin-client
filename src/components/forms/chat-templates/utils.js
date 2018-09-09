import React from "react";
import { Input, InputNumber, Select } from "antd";

const withDecorators = (TemplateForm, ...decorators) => {
  return props => <TemplateForm {...props} decorators={decorators} />;
};

const makeInputDecorator = pattern => {
  const { id, component } = pattern;
  const { type } = component;
  const props = component.props === undefined ? {} : component.props;
  const decorator = {
    id,
    options: pattern.options,
    component: <Input />
  };
  // let selectOptions = null,
  //   TheInput;

  // switch (type) {
  //   case "number":
  //     TheInput = InputNumber;
  //     break;
  //   case "select":
  //     TheInput = Select;
  //     break;
  //   default:
  //     TheInput = Input;
  // }

  // if (Array.isArray(component.options)) {
  //   selectOptions = component.options.map(item => (
  //     <Select.Option value={item.value}>{item.name}</Select.Option>
  //   ));
  // }

  // console.log("props: ", props);

  // if (props.defaultValue !== undefined) {
  //   decorator.options.initialValue = props.defaultValue;
  //   delete props.defaultValue;
  // }

  // decorator.component = <TheInput {...props}>{selectOptions}</TheInput>;

  return decorator;
};

export { withDecorators, makeInputDecorator };
