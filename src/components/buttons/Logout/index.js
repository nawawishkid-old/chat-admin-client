import React from "react";
import { Auth } from "../../../services/index";
import { Redirect } from "react-router-dom";
import { Button } from "antd";

const logout = () => {
  Auth.logout();

  // Not working, have to use Redux, I guess.
  return <Redirect to="/login" />;
};

const LogoutButton = () => <Button onClick={logout}>Logout</Button>;

export default LogoutButton;
