import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { FormBuilder } from "~/src/services/form";
import { templateInputApi } from "~/src/api/templateInput";
import { nameFieldScheme, labelFieldScheme } from "./field-schemes";
import TemplateInputFormEditorView from "./View";

const fieldSchemes = [nameFieldScheme, labelFieldScheme];

class TemplateInputFormEditorContainer extends React.Component {
  state = {
    componentType: this.props.data.componentScheme.type
  };

  makeComponentScheme = values => {
    const scheme = {};
    const schemeProps = {};
    const schemeOptions = [];

    for (let key in values) {
      const value = values[key];
      const typeofValue = typeof value;

      if (typeofValue === "undefined" || value === "" || value === null) {
        continue;
      }

      const splittedKey = key.split("_");

      // Assign top level properties
      if (splittedKey[0] === "componentScheme") {
        scheme[splittedKey[1]] = value;
        continue;
      }

      // Assign scheme.componentScheme.options (for component type 'select' only)
      // pattern is options_[label,value]_<id>
      // e.g. options_label_1, options_value_1, options_label_2, ...
      if (splittedKey[0] === "options") {
        const optionId = splittedKey[2];

        if (typeof schemeOptions[optionId] !== "undefined") {
          continue;
        }

        const labelKey = [splittedKey[0], "label", optionId].join("_");
        const valueKey = [splittedKey[0], "value", optionId].join("_");
        const defaultKey = [splittedKey[0], "default", optionId].join("_");

        const label = values[labelKey];
        const value = values[valueKey];
				const isDefault = values[defaultKey];

				// Set default value
				if (isDefault) {
					schemeProps.defaultValue = value;
				}

        schemeOptions.push({ label, value, isDefault });

        continue;
      }

      // Assign scheme.props
      if (splittedKey[0] === "props") {
        schemeProps[splittedKey[1]] = value;
      }
    }

    if (Object.keys(schemeProps).length > 0) {
      scheme.props = schemeProps;
    }

    if (schemeOptions.length > 0) {
      scheme.options = schemeOptions;
    }

    return scheme;
  };

  handleSubmit = (formProps, values) => {
    const { templateInputId } = this.props.match.params;
    const { name, label, componentScheme_type } = values;
    const componentScheme = this.makeComponentScheme(values);
    const data = {
      name,
      label,
      componentScheme
    };
    const options = {
      path: templateInputId,
      data
    };

    console.log("data: ", data);

    // return;

    templateInputApi.get("update").call(options, (err, res) => {
      if (res) {
        message.success(res.msg);
        return;
      }

      message.error(`${err.statusText} (${err.data.msg})`);
    });
  };

  getFieldSchemes = () => {
    const { data } = this.props;
    const editedFieldSchemes = fieldSchemes.map(field => {
      const fetchedValue = data[field.name];

      field.options.initialValue = fetchedValue;

      return field;
    });

    console.log("editedFieldSchemes: ", editedFieldSchemes);

    return editedFieldSchemes;
  };

  render() {
    const { componentType } = this.state;
    const { data } = this.props;
		const { componentScheme } = data;

    return (
      <TemplateInputFormEditorView
        fieldSchemes={this.getFieldSchemes()}
        componentType={componentType}
        initialValues={componentType === 'select' ? componentScheme.options : componentScheme.props}
        handleSubmit={this.handleSubmit}
        onComponentTypeChange={value => this.setState({ componentType: value })}
      />
    );
  }
}

export { TemplateInputFormEditorContainer };

export default TemplateInputFormEditorContainer;
