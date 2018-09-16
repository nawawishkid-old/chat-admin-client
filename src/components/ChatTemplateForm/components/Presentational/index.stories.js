import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChatTemplateForm from "./index";
// import ChatTemplateForm from "~/src/components/ChatTemplateForm";

const output = "This is output";
// const inputSchemes = [
//   {
//     name: "input1",
//     label: "Input #1",
//     componentScheme: {
//       type: "text",
//       props: {
//         placeholder: "This is input"
//       }
//     }
//   },
//   {
//     name: "input2",
//     label: "Input #2",
//     componentScheme: {
//       type: "number",
//       props: {
//         placeholder: "This is input"
//       }
//     }
//   }
// ];
const props = {
  title: "This is title",
  // templateId: "0392jfjwoe23r",
  children: <span key={1}>I'm a child.</span>
  // inputSchemes
  // handleSubmit: action("Get parsed value")
};

storiesOf("ChatTemplateForm.Presentational", module)
  .add("default", () => <ChatTemplateForm {...props} />)
  .add("with output", () => <ChatTemplateForm output={output} {...props} />);
