import React from "react";
import Page from "~/src/components/Page";
import TemplateFormEditor from "~/src/components/TemplateForm/Editor";

export const PageTemplateEdit = () => (
  <Page title="Edit template">
    <h1>Edit template</h1>
    <TemplateFormEditor />
  </Page>
);

export default PageTemplateEdit;
