import React from "react";
import { InputNumber, Select } from "antd";

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

export const GetAskBillingInfo = {
  title: "ask billing info",
  serviceSlug: "get-ask-billing-info"
};

export const GetAskForProductImage = {
  title: "ask for product image",
  serviceSlug: "get-ask-for-product-image"
};

export const GetGreeting = { title: "greeting", serviceSlug: "get-greeting" };

export const GetOrderCompletion = {
  title: "order completion",
  inputs: [province, orderNumber],
  serviceSlug: "get-order-completion"
};

export const GetPrice = {
  title: "price",
  inputs: [priceInput],
  serviceSlug: "get-price"
};

export const GetResend = { title: "resend", serviceSlug: "get-resend" };
