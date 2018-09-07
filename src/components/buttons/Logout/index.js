import React from "react";
// import { Auth } from "../../../services/index";
// import { Redirect } from "react-router-dom";
import { Button } from "antd";
import { AuthConsumer } from "../../contexts/Auth";

// const logout = () => {
//   Auth.logout();

//   // Not working, have to use Redux, I guess.
//   return <Redirect to="/login" />;
// };

const LogoutButton = () => (
  <AuthConsumer>
    {({ logout }) => <Button onClick={logout}>Logout</Button>}
  </AuthConsumer>
);

export default LogoutButton;
