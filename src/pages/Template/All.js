import React from "react";
import Page from "~/src/components/Page";
import TemplateFormQueryBoard from "~/src/components/TemplateForm/Query/Board";

const PageTemplateAll = () => (
  <Page title="All templates">
    <TemplateFormQueryBoard />
  </Page>
);

export { PageTemplateAll };

export default PageTemplateAll;
