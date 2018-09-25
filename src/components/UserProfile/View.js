import React from "react";
import PropTypes from "prop-types";
import { Avatar, Button } from "antd";

const dummyImgSrc =
  "https://cresscap.com/wp-content/uploads/bfi_thumb/dummy-profile-pic-353fq072wibz1xp0b9j75s.png";

/**
 * Info:
 * - Name
 * - username
 * - email
 * - profile image
 * - role
 * - joined at
 * - last active
 */
const UserProfileView = ({ name, username, email, imageSrc, handleEdit }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="user-profile__detail">
      <div className="user-profile__image">
        <Avatar shape="circle" size={240} icon="user" alt={name} />
      </div>
      <h3 className="user-profile__name">{name}</h3>
      <p className="user-profile__username">@{username}</p>
      <p className="user-profile__email">Email: {email}</p>
      <button className="user-profile__edit-button" onClick={handleEdit}>
        Edit profile
      </button>
    </div>
  </div>
);

UserProfileView.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  handleEdit: PropTypes.func.isRequired
};

export { UserProfileView };

export default UserProfileView;
