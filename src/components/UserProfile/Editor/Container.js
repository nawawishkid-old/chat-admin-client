import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import UserProfileEditorView from "./View";

const commonOptions = {
  options: {
    rules: [{ required: true, message: "This field is required." }]
  }
};

const nameFieldScheme = {
  ...commonOptions,
  name: "name",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Name"
    },
    icon: "user"
  }
};

const usernameFieldScheme = {
  ...commonOptions,
  name: "username",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Username"
    },
    icon: "user"
  }
};

const emailFieldScheme = {
  ...commonOptions,
  name: "email",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Email"
    },
    icon: "mail"
  }
};

const defaultFieldScheme = [
  nameFieldScheme,
  usernameFieldScheme,
  emailFieldScheme
];

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
