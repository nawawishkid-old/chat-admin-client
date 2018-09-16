import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "antd";
import TemplateBuilder from "./index";

const WithForm = Form.create()(TemplateBuilder);

storiesOf("TemplageBuilder", module).add("default", () => <WithForm />);
