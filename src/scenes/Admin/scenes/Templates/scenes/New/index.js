import React from "react";
import AdminPage from "~/src/scenes/Admin/components/Page";
import TemplateBuilder from "~/src/components/TemplateBuilder";

const New = () => (
  <AdminPage>
    <h1>Create new template (Mock)</h1>
    <TemplateBuilder />
  </AdminPage>
);

export { New };

export default New;
