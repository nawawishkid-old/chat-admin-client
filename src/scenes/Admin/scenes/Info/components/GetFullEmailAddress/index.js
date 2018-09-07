import React from "react";
import ServiceForm, {
  withApiHandling
} from "../../../../../../components/ServiceForm/index";
import { Input } from "antd";

import "antd/dist/antd.css";

const SFWithApiHandling = withApiHandling(ServiceForm);
const EmailInput = <Input name="email_user" placeholder="Email user" />;

const GetFullEmailAddress = (
  <SFWithApiHandling
    title="Get full email address"
    inputs={[EmailInput]}
    method="get"
    path="get-full-email-address.php"
    dataKey="email"
  />
);

export default GetFullEmailAddress;
