import React from "react";
import Page from "~/src/components/Page";
import TemplateInputFormBuilder from "~/src/components/TemplateInputForm/Builder";

export const PageTemplateInputNew = () => (
  <Page title="New template input">
    <h1>Create new template</h1>
    <TemplateInputFormBuilder />
  </Page>
);

export default PageTemplateInputNew;
