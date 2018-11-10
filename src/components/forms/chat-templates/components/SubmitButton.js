import React from "react";
import { Button } from "antd";

const getHandleSubmit = form => e => {
  e.preventDefault();
  form.validateFields((err, values) => {
    if (!err) {
      console.log("Received values of form: ", values);
    }
  });
};

const SubmitButton = ({ form }) => (
  <Button onClick={getHandleSubmit(form)}>Get</Button>
);

export default SubmitButton;
