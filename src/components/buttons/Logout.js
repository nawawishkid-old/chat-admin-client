import React from "react";
import { Button } from "antd";
import { withAuth } from "~/src/services/auth";

const ButtonLogout = ({ logout }) => <Button onClick={logout}>Logout</Button>;

export default withAuth(ButtonLogout);
