import React from "react";
import BoardView from "./View";
import { jwtAuth } from "~/src/services/auth";
import templateApi from "~/src/api/template";
import loadable from "~/src/components/Loadable";

const LoadableBoard = loadable(({ data }) => <BoardView templates={data} />);

const handleLoad = load => {
  const userId = jwtAuth.getParsedTokenPayload().sub;
  const options = {
    params: {
      creatorId: userId
    }
  };

  templateApi.get("get").call(options, (err, res, status) => {
    const templates = status === 404 ? [] : res.data.doc;

    load(templates);
  });
};

const TemplateFormQueryBoardContainer = () => (
  <LoadableBoard handleLoad={handleLoad} />
);

export { TemplateFormQueryBoardContainer };

export default TemplateFormQueryBoardContainer;
