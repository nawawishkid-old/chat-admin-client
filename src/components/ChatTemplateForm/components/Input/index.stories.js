import React from "react";
import Input from "./index";
import { Form } from "antd";
import { storiesOf } from "@storybook/react";

const props = {
  id: "thisIsId",
  label: "This is label",
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Test input"
    }
  }
};
const MockInput = ({ form }) => <Input form={form} {...props} />;
const MockInputWithForm = Form.create()(MockInput);

storiesOf("ChatTemplateForm.Input", module).add("default", () => (
  <MockInputWithForm />
));
