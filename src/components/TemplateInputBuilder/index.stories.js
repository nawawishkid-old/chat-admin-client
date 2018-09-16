import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "antd";
import TemplateInputBuilder from "./index";

const WithForm = Form.create()(TemplateInputBuilder);

storiesOf("TemplageInputBuilder", module).add("default", () => <WithForm />);
