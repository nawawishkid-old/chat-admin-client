import React from "react";
import AdminPage from "~/src/scenes/Admin/components/Page";
import TemplateInputBuilder from "~/src/components/TemplateInputBuilder";

const New = () => (
  <AdminPage>
    <h1>Create new template (Mock)</h1>
    <TemplateInputBuilder />
  </AdminPage>
);

export { New };

export default New;
