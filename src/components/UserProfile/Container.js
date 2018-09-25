import React from "react";
import PropTypes from 'prop-types';
import UserProfileView from './View';

const UserProfileContainer = ({ user }) => {
  const { name, username, email, imageSrc } = user;

  return (
    <UserProfileView
      name={name}
      username={username}
      email={email}
      imageSrc={imageSrc}
    />
  );
};

export { UserProfileContainer };

export default UserProfileContainer;
