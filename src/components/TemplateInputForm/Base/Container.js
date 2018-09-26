import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  nameFieldScheme,
  labelFieldScheme
} from "~/src/data/form-schemes/template-input";
import TemplateInputFormBuilderView from "./View";
import SchemebasedFormContainer from "~/src/components/SchemebasedForm/Container";

const defaultFieldSchemes = [nameFieldScheme, labelFieldScheme];

/**
 * - withApi
 * - withInitialValue
 */
class TemplateInputFormCommonBuilderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentType: this.getInitialComponentType()
    };
  }

  getInitialComponentType = () => {
    const { doc } = this.props;

    return doc ? doc.componentScheme.type : "text";
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

  handleSubmit = values => {
    const { handleSubmit } = this.props;
    const { name, label } = values;
    const componentScheme = this.makeComponentScheme(values);
    const data = {
      name,
      label,
      componentScheme
    };
    const options = { data };

    handleSubmit(options, values, this.props);
  };

  handleCancel = () => {
    this.props.handleCancel(this.props);
  };

  getInitialInputProps = () => {
    const { componentScheme } = this.props.doc;
    const { type, options, props } = componentScheme;

    return type === "select" ? options : props;
  };

  render() {
    const { componentType } = this.state;
    const { doc, handleSubmit, handleCancel } = this.props;
    const initialInputProps = doc ? this.getInitialInputProps() : undefined;

    return (
      <SchemebasedFormContainer
        view={TemplateInputFormBuilderView}
        defaultFieldSchemes={defaultFieldSchemes}
        handleSubmit={this.handleSubmit}
        cancelText="Cancel"
        handleCancel={handleCancel ? this.handleCancel : undefined}
        componentType={componentType}
        initialInputProps={initialInputProps}
        doc={doc}
        onComponentTypeChange={value => this.setState({ componentType: value })}
      />
    );
  }
}

TemplateInputFormCommonBuilderContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func,
  doc: PropTypes.object // Object of templateInput scheme document from database.
};

export { TemplateInputFormCommonBuilderContainer };

export default TemplateInputFormCommonBuilderContainer;
