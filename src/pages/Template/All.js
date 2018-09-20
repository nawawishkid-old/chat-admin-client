import React from "react";
import templateApi from "~/src/api/template";
import loadable from "~/src/components/Loadable";
import TemplateFormQuery from "~/src/components/TemplateForm/Query";

const TemplateFormQueryLoadable = loadable(({ data }) =>
  data.map(doc => (
    <TemplateFormQuery fieldSchemes={doc.inputs} templateId={doc._id} />
  ))
);

const Wait = () => <h3>Loading...</h3>;
const Timeout = () => <h3>Timeout!</h3>;
const handleLoad = load =>
  templateApi.get("get").call((err, data, status) => {
    console.log("STATUS: ", status);
    if (err) {
      console.log(err);
      return;
    }
    console.log("data: ", data);
    load(data.doc);
  });
const AllTemplateFormQueries = () => (
  <TemplateFormQueryLoadable
    handleLoad={handleLoad}
    limit={5000}
    wait={Wait}
    timeout={Timeout}
  />
);

const PageTemplateAll = () => (
  <div>
    <h1>All template</h1>
    <AllTemplateFormQueries />
  </div>
);

export { PageTemplateAll };

export default PageTemplateAll;
