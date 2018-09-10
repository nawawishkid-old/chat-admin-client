import React from "react";
import ServicePanel from "~/src/components/ServicePanel/index";
import GetFullEmailAddress from "./components/GetFullEmailAddress/index";
import GetPassword from "./components/GetPassword/index";
import FormatPhoneNumber from "./components/FormatPhoneNumber/index";

const Info = () => (
  <div>
    <h1>Info!</h1>
    <ServicePanel>
      {GetFullEmailAddress}
      {GetPassword}
      {FormatPhoneNumber}
    </ServicePanel>
  </div>
);

export { Info };

export default Info;
