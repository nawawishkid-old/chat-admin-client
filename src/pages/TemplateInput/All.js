import React from "react";
import Page from "~/src/components/Page";
import templateInputApi from "~/src/api/templateInput";
import loadable from "~/src/components/Loadable";
import TemplateInputFormQuery from "~/src/components/TemplateInputForm/Query";

const PageTemplateInputAll = () => (
  <Page title="All template inputs">
    <h1>All template</h1>
    <TemplateInputFormQuery />
  </Page>
);

export { PageTemplateInputAll };

export default PageTemplateInputAll;
