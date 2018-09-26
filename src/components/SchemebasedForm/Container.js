import React from "react";
import PropTypes from "prop-types";
import SchemebasedFormView from "./View";

class SchemebasedFormContainer extends React.Component {
  handleSubmit = (formProps, values) => {
    this.props.handleSubmit(values);
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  editFieldSchemes = doc => {
    const { defaultFieldSchemes } = this.props;
    const editedFieldSchemes = defaultFieldSchemes.map(field => {
      const fetchedValue = doc[field.name];

      field.options.initialValue = fetchedValue;

      return field;
    });

    return editedFieldSchemes;
  };

  render() {
    const {
      doc,
      defaultFieldSchemes,
      handleCancel,
      handleSubmit,
      ...rest
    } = this.props;
    const fieldSchemes = doc ? this.editFieldSchemes(doc) : defaultFieldSchemes;

    return (
      <SchemebasedFormView
        fieldSchemes={fieldSchemes}
        handleSubmit={this.handleSubmit}
        handleCancel={handleCancel ? this.handleCancel : undefined}
        {...rest}
      />
    );
  }
}

SchemebasedFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func,
  defaultFieldSchemes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]).isRequired,
  doc: PropTypes.object // Object of templateInput scheme document from database.
};

export { SchemebasedFormContainer };

export default SchemebasedFormContainer;
