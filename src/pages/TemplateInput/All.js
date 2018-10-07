import React from "react";
import Page from "~/src/components/Page";
import templateInputApi from "~/src/api/templateInput";
import loadable from "~/src/components/Loadable";
import TemplateInputFormQueryBoard from "~/src/components/TemplateInputForm/Query/Board";

const PageTemplateInputAll = () => (
  <Page title="All template inputs">
    <TemplateInputFormQueryBoard />
  </Page>
);

export { PageTemplateInputAll };

export default PageTemplateInputAll;
