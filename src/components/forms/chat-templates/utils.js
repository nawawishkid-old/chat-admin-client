import React from "react";
import { Input, InputNumber, Select } from "antd";

/**
 * Attach `antd` field decorators to the component
 *
 * @param {React.Component} TemplateForm Component to be attached
 * @param {Object} decorators `antd` filed decorator arguments object
 * @return {React.Component} The decorators-attached component
 */
const withAntdFieldDecorators = (TemplateForm, ...decorators) => {
  return props => <TemplateForm {...props} decorators={decorators} />;
};

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
  const { id, componentScheme } = scheme;
  const props =
    componentScheme.props === undefined ? {} : componentScheme.props;
  const decorator = {
    id,
    options: scheme.options || {}
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
    selectOptions = componentScheme.options.map((item, index) => (
      <Select.Option value={item.value} key={index}>
        {item.name}
      </Select.Option>
    ));
  }

  // console.log("props: ", props);

  if (props.defaultValue !== undefined) {
    decorator.options.initialValue = props.defaultValue;
    delete props.defaultValue;
  }

  decorator.component = <TheInput {...props}>{selectOptions}</TheInput>;

  return decorator;
};

export { withAntdFieldDecorators, makeAntdFieldDecorator };
