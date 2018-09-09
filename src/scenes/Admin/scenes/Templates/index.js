import React from "react";
import ServicePanel from "/src/components/ServicePanel/index";
import { Form, Row, Col } from "antd";
import {
  GetPrice,
  GetOrderCompletion,
  GetGreeting,
  GetResend,
  GetAskBillingInfo,
  GetAskForProductImage
} from "./components/index";
import ChatTemplateForm from "./components/ChatTemplateForm/index";
import CTF from "../../../../components/forms/chat-templates/ChatTemplate";
import {
  withDecorators,
  makeInputDecorator
} from "../../../../components/forms/chat-templates/utils";

const forms = [
  GetPrice,
  GetOrderCompletion,
  GetGreeting,
  GetResend,
  GetAskBillingInfo,
  GetAskForProductImage
];

// Pattern to create template input,
// similar to Ant Design's Form's getFieldDecorator()
const genderSchema = {
  id: "gender",
  options: {
    rules: [],
    initialValue: "male"
  },
  component: {
    type: "select",
    options: [
      { name: "Male", value: "male" },
      { name: "Female", value: "female" }
    ]
  }
};
// const priceSchema = {
//   id: "price",
//   options: {},
//   component: {
//     type: "number",
//     props: {
//       placeholder: "Price",
//       min: 0,
//       step: 10
//     }
//   }
// };

// // Usage
const genderDecorator = makeInputDecorator(genderSchema);
// const priceDecorator = makeInputDecorator(priceSchema);

const PriceForm = props => <CTF title="Get price template" {...props} />;
console.log("withDecorators: ", withDecorators(PriceForm, genderDecorator));

const WrappedPriceForm = Form.create()(
  withDecorators(PriceForm, genderDecorator)
);

const Templates = () => (
  <div>
    <h1>Templates!</h1>
    <ServicePanel>
      <WrappedPriceForm />
      {forms.map(form => <ChatTemplateForm {...form} />)}
    </ServicePanel>
  </div>
);

export default Templates;
