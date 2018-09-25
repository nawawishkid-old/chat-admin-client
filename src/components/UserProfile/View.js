import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'antd';

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
const UserProfileView = ({ name, username, email, imageSrc }) => (
  <div>
    <div className="user-profile__detail">
      <div className="user-profile__image">
        <img src={imageSrc} alt={name} />
      </div>
      <h3 className="user-profile__name">{name}</h3>
      <p className="user-profile__username">@{username}</p>
      <p className="user-profile__email">Email: {email}</p>
    </div>
    <button className="user-profile__edit-button">Edit profile</button>
  </div>
);

export { UserProfileView };

export default UserProfileView;
