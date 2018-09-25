import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import defaultFieldSchemes from "~/src/data/form-schemes/settings-account";
import SettingsAccountView from "./View";

class SettingsAccountContainer extends React.Component {
  state = {
    isCancel: false
  };

  handleSubmit = (err, values) => {
    if (err) {
      return;
    }

    console.log("values: ", values);

    handleSubmit(values);
  };

  handleCancel = () => this.setState({ isCancel: true });

  editFieldSchemes = doc => {
    const editedFieldSchemes = defaultFieldSchemes.map(field => {
      const fetchedValue = doc[field.name];

      field.options.initialValue = fetchedValue;

      return field;
    });

    return editedFieldSchemes;
  };

  render() {
    if (this.state.isCancel) {
      return <Redirect to="/admin/profile" />;
    }

    const { doc } = this.props;
    const fieldSchemes = doc ? this.editFieldSchemes(doc) : defaultFieldSchemes;

    return (
      <SettingsAccountView
        fieldSchemes={fieldSchemes}
        handleSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
        submitText="Save"
      />
    );
  }
}

SettingsAccountContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  doc: PropTypes.object // Object of templateInput scheme document from database.
};

export { SettingsAccountContainer };

export default SettingsAccountContainer;
