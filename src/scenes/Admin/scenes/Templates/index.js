import React from "react";
import AdminPage from "~/src/scenes/Admin/components/Page";
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
import ChatTemplateForm from "~/src/components/forms/chat-templates";
import TemplateInputBuilder from "~/src/components/TemplateInputBuilder";
import templateApi from "~/src/services/api/template";

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
// const genderScheme = {
//   label: "Gender",
//   _id: "gender", // Mongoose's `_id`
//   options: {
//     initialValue: "male"
//   },
//   componentScheme: {
//     type: "select",
//     options: [
//       { name: "Male", value: "male" },
//       { name: "Female", value: "female" }
//     ]
//   }
// };
// const priceScheme = {
//   label: "Price",
//   _id: "price",
//   options: {
//     rules: [{ required: true, message: "Price is required" }]
//   },
//   componentScheme: {
//     type: "number",
//     props: {
//       placeholder: "Price",
//       min: 0,
//       step: 10
//     }
//   }
// };
// const shopNameScheme = {
//   label: "Shop Name",
//   _id: "shopName",
//   options: {
//     rules: [{ required: true, message: "Shop name is required" }]
//   },
//   componentScheme: {
//     type: "text",
//     props: {
//       placeholder: "Shop name"
//     }
//   }
// };

// const PriceForm = (
//   <ChatTemplateForm
//     title="Get price template"
//     inputSchemes={[genderScheme, priceScheme, shopNameScheme]}
//   >
//     {/* {[genderScheme, priceScheme, shopNameScheme].map((item, index) => (
//       <ChatTemplateFormInput
//         label={item.title}
//         id={item.id}
//         options={item.options || {}}
//         componentScheme={item.componentScheme}
//         key={index}
//       />
//     ))} */}
//   </ChatTemplateForm>
// );

const Templates = () => (
  <AdminPage>
    <h1>Templates!</h1>
    <ServicePanel>
      {/* {PriceForm} */}
      {/* <TemplateInputBuilder /> */}
      {forms.map((form, index) => (
        <OldChatTemplateForm key={index} {...form} />
      ))}
    </ServicePanel>
  </AdminPage>
);

export { Templates };

export default Templates;
