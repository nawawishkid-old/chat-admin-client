import React from "react";
import { Icon, Input, Button, Checkbox } from "antd";

export const usernameDecorator = {
  id: "username",
  options: {
    rules: [
      {
        required: true,
        message: "Please input your username!"
      }
    ]
  },
  component: props => (
    <Input
      {...props}
      prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
      placeholder="Username"
    />
  )
};

export const checkBoxDecorator = {
  id: "remember",
  options: {
    initialValue: false
  },
  component: props => <Checkbox {...props}>Remember me</Checkbox>
};

export const passwordDecorator = {
  id: "password",
  options: {
    rules: [{ required: true, message: "Please input your Password!" }]
  },
  component: props => (
    <Input
      {...props}
      prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
      type="password"
      placeholder="Password"
    />
  )
};
