import React from "react";
import PropTypes from "prop-types";
import SchemebasedFormView from "./View";

class SchemebasedFormContainer extends React.Component {
  handleSubmit = (formProps, values) => {
    const props = { ...this.props, ...formProps };

    // This is inconsistency of parameters order, should be fixed.
    this.props.handleSubmit(values, props);
  };

  handleCancel = formProps => {
    const props = { ...this.props, ...formProps };

    this.props.handleCancel(props);
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
      view,
      ...rest
    } = this.props;
    const fieldSchemes = doc ? this.editFieldSchemes(doc) : defaultFieldSchemes;
    const View = view ? view : SchemebasedFormView;

    return (
      <View
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
  doc: PropTypes.object, // Object of templateInput scheme document from database.
  view: PropTypes.func // Alternative React component uses instead of SchemebasedFormView
};

export { SchemebasedFormContainer };

export default SchemebasedFormContainer;
