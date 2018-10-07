import React from "react";
import Page from "~/src/components/Page";
import TemplateFormQueryBoard from "~/src/components/TemplateForm/Query/Board";

const PageTemplateAll = () => (
  <Page title="All templates">
    <h1>All templates</h1>
    <TemplateFormQueryBoard />
  </Page>
);

export { PageTemplateAll };

export default PageTemplateAll;
