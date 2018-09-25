import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import defaultFieldScheme from "~/src/data/form-schemes/profile";
import UserProfileEditorView from "./View";

class UserProfileEditorContainer extends React.Component {
  state = {
    isCancel: false
  };

  handleSubmit = values => {};

  handleCancel = () => this.setState({ isCancel: true });

  editFieldSchemes = doc => {
    const editedFieldSchemes = defaultFieldSchemes.map(field => {
      const fetchedValue = doc[field.name];

      field.options.initialValue = fetchedValue;

      return field;
    });

    console.log("editedFieldSchemes: ", editedFieldSchemes);

    return editedFieldSchemes;
  };

  render() {
    if (this.state.isCancel) {
      return <Redirect to="/admin/profile" />;
    }

    const { doc } = this.props;
    const fieldSchemes = doc ? this.editFieldSchemes(doc) : defaultFieldScheme;

    return (
      <UserProfileEditorView
        fieldSchemes={fieldSchemes}
        handleSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}

UserProfileEditorContainer.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  doc: PropTypes.object // Object of templateInput scheme document from database.
};

export { UserProfileEditorContainer };

export default UserProfileEditorContainer;
