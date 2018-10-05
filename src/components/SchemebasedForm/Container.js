import React from "react";
import PropTypes from "prop-types";
import SchemebasedFormView from "./View";
import { SchemebasedFormProvider } from "./Context";

class SchemebasedFormContainer extends React.Component {
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
			submitButtonProps,
      submitText,
      cancelText,
      before,
      after,
      view,
      children,
      ...rest
    } = this.props;
    const fieldSchemes = doc ? this.editFieldSchemes(doc) : defaultFieldSchemes;
    const View = view ? view : SchemebasedFormView;
    const providedData = {
			submitButtonProps,
      handleSubmit,
      handleCancel,
      submitText,
      cancelText,
      doc,
      ...rest
    };

    return (
      <SchemebasedFormProvider value={providedData}>
        {children ? (
          React.cloneElement(children, { fieldSchemes })
        ) : (
          <View fieldSchemes={fieldSchemes} before={before} after={after} />
        )}
      </SchemebasedFormProvider>
    );
  }
}

SchemebasedFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func,
	submitButtonProps: PropTypes.object,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  defaultFieldSchemes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]).isRequired,
  doc: PropTypes.object, // Object of templateInput scheme document from database.
  view: PropTypes.func, // Alternative React component uses instead of SchemebasedFormView
  children: PropTypes.element
};

export { SchemebasedFormContainer };

export default SchemebasedFormContainer;
