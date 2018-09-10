import React from "react";
import AdminPage from "~/src/scenes/Admin/components/Page";
import ServicePanel from "~/src/components/ServicePanel/index";
import GetFullEmailAddress from "./components/GetFullEmailAddress/index";
import GetPassword from "./components/GetPassword/index";
import FormatPhoneNumber from "./components/FormatPhoneNumber/index";

const Info = () => (
  <AdminPage>
    <h1>Info!</h1>
    <ServicePanel>
      {GetFullEmailAddress}
      {GetPassword}
      {FormatPhoneNumber}
    </ServicePanel>
  </AdminPage>
);

export { Info };

export default Info;
