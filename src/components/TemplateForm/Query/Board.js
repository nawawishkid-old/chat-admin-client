import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import TemplateBoard from "~/src/components/TemplateBoard";
import { jwtAuth } from "~/src/services/auth";
import templateApi from "~/src/api/template";
import loadable from "~/src/components/Loadable";
import TemplateFormQuery from "./index";

const LoadableBoard = loadable(({ data }) => (
  <TemplateBoard header={"All templates. (" + data.length + ")"} emptyComponent={BoardEmpty}>
    {data.map((template, index) => (
      <TemplateFormQuery template={template} key={index} />
    ))}
  </TemplateBoard>
));

const BoardEmpty = styled(props => (
  <div {...props}>
    <h3>Such empty!</h3>
    <p>You don't have any template yet</p>
    <Link to="/admin/templates/new">
      <Button type="primary">Create</Button>
    </Link>
  </div>
))`
  height: 100%;
  text-align: center;
`;

const handleLoad = load => {
  const userId = jwtAuth.getParsedTokenPayload().sub;
  const options = {
    params: {
      creatorId: userId
    }
  };

  templateApi.get("get").call(options, (err, res, status) => {
    const templates = status === 404 ? [] : res.data.templates;

    load(templates);
  });
};

const TemplateFormQueryBoardContainer = () => (
  <LoadableBoard handleLoad={handleLoad} />
);

export { TemplateFormQueryBoardContainer };

export default TemplateFormQueryBoardContainer;
