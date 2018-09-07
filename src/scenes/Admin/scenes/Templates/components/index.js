import React from "react";
import { InputNumber, Select } from "antd";
import ChatTemplateForm from "./ChatTemplateForm/index";

import "antd/dist/antd.css";

const province = (
  <Select name="area" defaultValue="non_bkk">
    <Select.Option value="non_bkk">NON-BKK</Select.Option>
    <Select.Option value="bkk">BKK</Select.Option>
  </Select>
);
const orderNumber = (
  <InputNumber
    name="order_number"
    placeholder="Order Number"
    style={{ width: "100%" }}
    required
  />
);
const priceInput = (
  <InputNumber
    min={0}
    step={10}
    formatter={value => `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    defaultValue={0}
    name="price"
    placeholder="Price"
  />
);

export const GetAskBillingInfo = (
  <ChatTemplateForm
    title="ask billing info"
    serviceSlug="get-ask-billing-info"
  />
);

export const GetAskForProductImage = (
  <ChatTemplateForm
    title="ask for product image"
    serviceSlug="get-ask-for-product-image"
  />
);

export const GetGreeting = (
  <ChatTemplateForm title="greeting" serviceSlug="get-greeting" />
);

export const GetOrderCompletion = (
  <ChatTemplateForm
    title="order completion"
    inputs={[province, orderNumber]}
    serviceSlug="get-order-completion"
  />
);

export const GetPrice = (
  <ChatTemplateForm
    title="price"
    inputs={[priceInput]}
    serviceSlug="get-price"
  />
);

export const GetResend = (
  <ChatTemplateForm title="resend" serviceSlug="get-resend" />
);
