import React from "react";
import { Form, Button } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import {
  idFieldScheme,
  labelFieldScheme,
  componentTypeFieldScheme
} from "./field-schemes";
import { minScheme, maxScheme } from "./component-props-schemes/number";

const schemes = [idFieldScheme, labelFieldScheme];

const getComponentPropsFieldSchemes = type => {
  let schemes;

  switch (type) {
    case "number":
      schemes = [minScheme, maxScheme];
      break;

    default:
      break;
  }

  return schemes;
};
// const getComponentPropsFieldDecorators = type => {
//   let schemes;

//   switch (type) {
//     case "number":
//       schemes = [minScheme, maxScheme];
//       break;

//     default:
//       break;
//   }

//   return schemes.map(scheme => makeAntdFieldDecorator(scheme));
// };

const ComponentTypeField = ({ form, type, onChange, ...rest }) => {
  componentTypeFieldScheme.options.initialValue = type;

  const decorator = makeAntdFieldDecorator(componentTypeFieldScheme);
  const component = React.cloneElement(decorator.component, { onChange });

  return (
    <div>
      <Form.Item {...rest}>
        {form.getFieldDecorator(decorator.id, decorator.options)(component)}
      </Form.Item>
    </div>
  );
};

const ComponentFieldsPropsPanel = ({ form, type }) => {
  const schemes = getComponentPropsFieldSchemes(type);

  return (
    <div>
      <p>Component's properties</p>
      <div>
        {schemes.map((scheme, index) => {
          const decor = makeAntdFieldDecorator(scheme);

          return (
            <Form.Item key={index} label={scheme.label}>
              {form.getFieldDecorator(decor.id, decor.options)(decor.component)}
            </Form.Item>
          );
        })}
      </div>
    </div>
  );
};

class TemplateInputBuilder extends React.Component {
  state = { componentType: "number" };

  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("submit!");
      }
    });
  };

  render() {
    const { form } = this.props;

    return (
      <Form layout="horizontal">
        {schemes.map((scheme, index) => {
          const decorator = makeAntdFieldDecorator(scheme);

          return (
            <Form.Item key={index} label={scheme.label}>
              {form.getFieldDecorator(decorator.id, decorator.options)(
                decorator.component
              )}
            </Form.Item>
          );
        })}
        <ComponentTypeField
          form={form}
          type={this.state.componentType}
          onChange={e => this.setState({ componentType: e.target.value })}
        />
        <ComponentFieldsPropsPanel
          form={form}
          type={this.state.componentType}
        />
        <Form.Item>
          <Button onClick={this.handleSubmit}>Create</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(TemplateInputBuilder);
