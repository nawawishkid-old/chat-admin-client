import React from "react";
import Page from "~/src/components/Page";
import TemplateFormBuilder from "~/src/components/TemplateForm/Builder";

export const PageTemplateNew = () => (
  <Page title="New template">
    <h1>Create new template</h1>
    <TemplateFormBuilder />
  </Page>
);

export default PageTemplateNew;
