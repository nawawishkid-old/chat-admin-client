import React from "react";
import ServicePanel from "~/src/components/ServicePanel";
import { Form, Row, Col } from "antd";
import {
  GetPrice,
  GetOrderCompletion,
  GetGreeting,
  GetResend,
  GetAskBillingInfo,
  GetAskForProductImage
} from "./components/index";
import OldChatTemplateForm from "./components/ChatTemplateForm/index";
import ChatTemplateForm, {
  Input as ChatTemplateFormInput
} from "~/src/components/forms/chat-templates";

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
const genderScheme = {
  label: "Gender",
  id: "gender",
  options: {
    initialValue: "male"
  },
  componentScheme: {
    type: "select",
    options: [
      { name: "Male", value: "male" },
      { name: "Female", value: "female" }
    ]
  }
};
const priceScheme = {
  label: "Price",
  id: "price",
  options: {
    rules: [{ required: true, message: "Price is required" }]
  },
  componentScheme: {
    type: "number",
    props: {
      placeholder: "Price",
      min: 0,
      step: 10
    }
  }
};
const shopNameScheme = {
  label: "Shop Name",
  id: "shopName",
  options: {
    rules: [{ required: true, message: "Shop name is required" }]
  },
  componentScheme: {
    type: "text",
    props: {
      placeholder: "Shop name"
    }
  }
};

const PriceForm = (
  <ChatTemplateForm
    title="Get price template"
    inputSchemes={[genderScheme, priceScheme, shopNameScheme]}
  >
    {/* {[genderScheme, priceScheme, shopNameScheme].map((item, index) => (
      <ChatTemplateFormInput
        label={item.title}
        id={item.id}
        options={item.options || {}}
        componentScheme={item.componentScheme}
        key={index}
      />
    ))} */}
  </ChatTemplateForm>
);

const Templates = () => (
  <div>
    <h1>Templates!</h1>
    <ServicePanel>
      {PriceForm}
      {forms.map((form, index) => (
        <OldChatTemplateForm key={index} {...form} />
      ))}
    </ServicePanel>
  </div>
);

export { Templates };

export default Templates;
