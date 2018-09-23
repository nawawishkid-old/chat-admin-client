import React from "react";
//import { TemplateFormBuilder } from "~/src/components/TemplateForm";
import TemplateFormBuilder from '~/src/components/TemplateForm/Builder';

export const PageTemplateInputNew = () => (
  <div>
    <h1>Create new template</h1>
    <TemplateFormBuilder />
  </div>
);

export default PageTemplateInputNew;
