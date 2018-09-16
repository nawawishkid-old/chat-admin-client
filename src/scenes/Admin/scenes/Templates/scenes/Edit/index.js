import React from "react";
import { withRouter } from "react-router-dom";
import AdminPage from "~/src/scenes/Admin/components/Page";
import TemplateEditor from "~/src/components/TemplateEditor";

const Edit = withRouter(
  props =>
    console.log("EDIT props: ", props) || (
      <AdminPage>
        <h1>Edit template (Draft)</h1>
        <TemplateEditor />
      </AdminPage>
    )
);

export { Edit };

export default Edit;
