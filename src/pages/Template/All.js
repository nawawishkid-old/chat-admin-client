import React from "react";
import Page from "~/src/components/Page";
import templateApi from "~/src/api/template";
import loadable from "~/src/components/Loadable";
import TemplateFormQuery from "~/src/components/TemplateForm/Query";

const TemplateFormQueryLoadable = loadable(({ data }) =>
  data.map((doc, index) => (
    <TemplateFormQuery
      key={index}
      name={doc.name}
      fieldSchemes={doc.inputs}
      templateId={doc._id}
    />
  ))
);

const handleLoad = load =>
  templateApi.get("get").call((err, data, status) => {
    console.log("STATUS: ", status);
    if (err) {
      console.log(err);
      return;
    }
    console.log("data: ", data);
    load(data.data.doc);
  });
const AllTemplateFormQueries = () => (
  <TemplateFormQueryLoadable handleLoad={handleLoad} />
);

const PageTemplateAll = () => (
  <Page title="All templates">
    <h1>All template</h1>
    <AllTemplateFormQueries />
  </Page>
);

export { PageTemplateAll };

export default PageTemplateAll;
