import React from "react";
import ServiceForm, {
  withApiHandling
} from "../../../../../../components/ServiceForm/index";

import "antd/dist/antd.css";

const SFWithApiHandling = withApiHandling(ServiceForm);

const GetFullEmailAddress = (
  <SFWithApiHandling
    title="Get password"
    method="get"
    path="get-password.php"
    dataKey="password"
  />
);

export default GetFullEmailAddress;
