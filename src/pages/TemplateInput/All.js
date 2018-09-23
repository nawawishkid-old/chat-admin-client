import React from "react";
import templateInputApi from "~/src/api/templateInput";
import loadable from "~/src/components/Loadable";
import TemplateInputFormQuery from "~/src/components/TemplateInputForm/Query";

// const TemplateInputFormQueryLoadable = loadable(({ data }) =>
//   data.map((doc, index) => (
//     <TemplateInputFormQuery
//       key={index}
//       fieldSchemes={doc.inputs}
//       templateId={doc._id}
//     />
//   )),
// );
// 
// const handleLoad = load =>
//   templateInputApi.get("get").call((err, data, status) => {
//     console.log("STATUS: ", status);
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("data: ", data);
//     load(data.data.doc);
//   });
// const AllTemplateInputFormQueries = () => (
//   <TemplateInputFormQueryLoadable handleLoad={handleLoad} />
// );

const PageTemplateInputAll = () => (
  <div>
    <h1>All template</h1>
    <TemplateInputFormQuery />
  </div>
);

export { PageTemplateInputAll };

export default PageTemplateInputAll;
