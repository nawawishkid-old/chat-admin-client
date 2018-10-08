import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import UserProfileView from "./View";

class UserProfileContainer extends React.Component {
  state = {
    isEditMode: false
  };

  handleEdit = () => this.setState({ isEditMode: true });

  render() {
    if (this.state.isEditMode) {
      return <Redirect to="/admin/profile/edit" />;
    }

    const { name, username, email, imageSrc } = this.props.user;

    return (
      <UserProfileView
        name={name}
        username={username}
        email={email}
        imageSrc={imageSrc}
        handleEdit={this.handleEdit}
      />
    );
  }
}

UserProfileContainer.propTypes = {
  user: PropTypes.object.isRequired
};

export { UserProfileContainer };

export default UserProfileContainer;
