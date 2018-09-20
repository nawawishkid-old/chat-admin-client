import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "antd";
import { makeAntdFieldDecorator } from "~/src/components/forms/chat-templates/utils";
import {
  nameFieldScheme,
  labelFieldScheme,
  componentSchemeTypeFieldScheme
} from "./field-schemes";
import numberPropsScheme from "./component-props-schemes/number";
import textPropsScheme from "./component-props-schemes/text";
import { withApi } from "~/src/services/api";

const schemes = [nameFieldScheme, labelFieldScheme];

const getComponentPropsFieldSchemes = type => {
  let schemes;

  switch (type) {
    case "number":
      schemes = numberPropsScheme;
      break;
    case "text":
      schemes = textPropsScheme;
      break;
    case "select":
      schemes = [];
      break;

    default:
      break;
  }

  return schemes;
};

const ComponentTypeField = ({ form, type, onChange, ...rest }) => {
  componentSchemeTypeFieldScheme.options.initialValue = type;

  const decorator = makeAntdFieldDecorator(componentSchemeTypeFieldScheme);
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

  return schemes.length === 0 ? null : (
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

  /**
   * Transform form's filed values object to input scheme object (specific object structure)
   *
   * @param {Object} values Form's field values from `antd` form.validateFields()
   * @returns {Object} Input scheme object
   */
  parseFieldNameToScheme = values => {
    const scheme = {};
    const componentScheme = { props: {} };

    for (let key in values) {
      const split = key.split("_");

      // remove 'input_' prefix
      split.shift();

      if (split.length === 1) {
        scheme[split[0]] = values[key];
        continue;
      }

      if (split[0] === "componentScheme") {
        if (split[1] === "props") {
          componentScheme.props[split[2]] = values[key];
        } else {
          componentScheme[split[1]] = values[key];
        }
      }
    }

    scheme.componentScheme = componentScheme;

    return scheme;
  };

  handleSubmit = e => {
    const { form, api } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        console.log("submit!");
        console.log("values: ", values);
        const inputScheme = this.parseFieldNameToScheme(values);
        console.log("parsed value: ", inputScheme);
        // API here!
        api.templateInput.exec("create", { data: inputScheme }, res => {
          console.log("res: ", res);
        });
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
          onChange={value => this.setState({ componentType: value })}
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

TemplateInputBuilder.propTypes = {
  form: PropTypes.object,
  api: PropTypes.object
};

export default Form.create()(withApi("templateInput")(TemplateInputBuilder));
