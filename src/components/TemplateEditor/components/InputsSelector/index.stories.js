import React from "react";
import { storiesOf } from "@storybook/react";
import { Pure } from "./index";

const inputSchemes = [
  {
    name: "example",
    label: "This is label",
    componentScheme: {
      type: "text",
      props: {
        placeholder: "This is placeholder"
      }
    }
  }
];

storiesOf("TemplateEditor.InputSelector", module).add("default", () => (
  <Pure inputSchemes={inputSchemes} />
));
