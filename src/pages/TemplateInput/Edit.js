import React from "react";
import Page from "~/src/components/Page";
import TemplateInputFormEditor from "~/src/components/TemplateInputForm/Editor";

export const PageTemplateInputEdit = () => (
  <Page title="Edit template input">
    <h1>Edit template</h1>
    <TemplateInputFormEditor />
  </Page>
);

export default PageTemplateInputEdit;
