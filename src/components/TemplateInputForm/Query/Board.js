import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import TemplateBoard from "~/src/components/TemplateBoard";
import { jwtAuth } from "~/src/services/auth";
import templateInputApi from "~/src/api/templateInput";
import loadable from "~/src/components/Loadable";
import TemplateInputFormQuery from "./Container";

const LoadableBoard = loadable(({ data }) => (
  <TemplateBoard
    header={"All template inputs. (" + data.length + ")"}
    emptyComponent={BoardEmpty}>
    {data.map((templateInput, index) => (
      <TemplateInputFormQuery input={templateInput} key={index} />
    ))}
  </TemplateBoard>
));

const BoardEmpty = styled(props => (
  <div {...props}>
    <h3>Such empty!</h3>
    <p>You don't have any template input yet</p>
    <Link to="/admin/template-inputs/new">
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

  templateInputApi.get("get").call(options, (err, res, status) => {
    const templateInputs = status === 404 ? [] : res.data.templateInputs;

    load(templateInputs);
  });
};

const TemplateFormQueryBoardContainer = () => (
  <LoadableBoard handleLoad={handleLoad} />
);

export { TemplateFormQueryBoardContainer };

export default TemplateFormQueryBoardContainer;
