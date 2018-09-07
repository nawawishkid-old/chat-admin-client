import React from "react";
import ServicePanel from "/src/components/ServicePanel/index";
import {
  GetPrice,
  GetOrderCompletion,
  GetGreeting,
  GetResend,
  GetAskBillingInfo,
  GetAskForProductImage
} from "./components/index";

const Templates = () => (
  <div>
    <h1>Templates!</h1>
    <ServicePanel>
      {GetPrice}
      {GetOrderCompletion}
      {GetGreeting}
      {GetResend}
      {GetAskBillingInfo}
      {GetAskForProductImage}
    </ServicePanel>
  </div>
);

export default Templates;
