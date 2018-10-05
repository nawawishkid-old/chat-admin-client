import React from "react";
import Page from "~/src/components/Page";
import { Row, Col } from "antd";
import styled from "styled-components";
import templateApi from "~/src/api/template";
import loadable from "~/src/components/Loadable";
import TemplateFormQuery from "~/src/components/TemplateForm/Query";

const StyledTemplateFormQuery = styled(TemplateFormQuery)`
  margin-bottom: 2em;
`;

const TemplateFormQueryLoadable = loadable(({ data }) =>
  data.map((doc, index) => (
    <Col
      xs={24}
      md={12}
      lg={8}
      key={index}
      style={{ padding: "0 1em", marginBottom: "1em" }}>
      <StyledTemplateFormQuery
        key={index}
        name={doc.name}
        fieldSchemes={doc.inputs || []} // Temporary
        templateId={doc._id}
      />
    </Col>
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
    <Row
      type="flex"
      justify="space-between"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <AllTemplateFormQueries />
    </Row>
  </Page>
);

export { PageTemplateAll };

export default PageTemplateAll;
