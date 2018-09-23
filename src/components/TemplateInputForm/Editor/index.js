import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, message } from "antd";
import loadable from "~/src/components/Loadable";
import { withRouter } from "react-router-dom";
import { CommonForm } from "~/src/components/common/form";
import {
  FormBuilder,
  withForm,
  makeAntdFieldDecorator,
} from "~/src/services/form";
import { templateInputApi } from "~/src/api/templateInput";
// import fieldSchemes from "./field-schemes";
import {
  nameFieldScheme,
  labelFieldScheme,
  componentSchemeTypeFieldScheme,
} from "./field-schemes";
import numberPropsScheme from "./component-props-schemes/number";
import textPropsScheme from "./component-props-schemes/text";

const fieldSchemes = [nameFieldScheme, labelFieldScheme];

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

  console.log("decorator: ", decorator);

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

class TemplateInputFormEditorView extends React.Component {
  state = {
    componentType: "text",
  };

  handleSubmit = (formProps, values) => {
    const { templateInputId } = this.props.match.params;
    const options = {
      path: templateInputId,
      data: values,
    };

    templateInputApi.get("update").call(options, (err, res) => {
      if (res) {
        message.success(res.msg);
        return;
      }

      message.error(err.msg);
    });
  };

  getFields = () => {
    const { data, form } = this.props;
    const editedFieldSchemes = fieldSchemes.map(field => {
      const fetchedValue = data[field.name];

      field.options.initialValue = fetchedValue; // "5555 " + templateId;

      return field;
    });
    const fields = editedFieldSchemes.map(field =>
      FormBuilder.makeField(field),
    );

    return fields;
  };

  render() {
    return (
      <Card>
        <CommonForm handleSubmit={this.handleSubmit}>
          {this.getFields()}
          <ComponentTypeField
            type={this.state.componentType}
            onChange={value => this.setState({ componentType: value })}
          />
          <ComponentFieldsPropsPanel type={this.state.componentType} />
        </CommonForm>
      </Card>
    );
  }
}

// With Antd form
const TemplateInputFormEditor = withForm(TemplateInputFormEditorView);

// Making the component loadable
const handleLoad = (load, props) => {
  const { templateInputId } = props.match.params;
  const options = { path: templateInputId };

  templateInputApi.get("get").call(options, (err, res) => {
    if (res) {
      load(res.data.templateInput);
    }
  });
};
const Loadable = loadable(({ data, ...rest }) => (
  <TemplateInputFormEditor data={data} {...rest} />
));

// Supply 'match' props to the component
const WR = withRouter(({ match }) => (
  <Loadable match={match} handleLoad={handleLoad} />
));

export default WR;
