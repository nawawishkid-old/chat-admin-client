import React from "react";
import TemplateBoard from "~/src/components/TemplateBoard";
import { jwtAuth } from "~/src/services/auth";
import templateInputApi from "~/src/api/templateInput";
import loadable from "~/src/components/Loadable";
import TemplateInputFormQuery from "./Container";

const LoadableBoard = loadable(({ data }) => (
  <TemplateBoard header={"All template inputs. (" + data.length + ")"}>
    {data.map((templateInput, index) => (
      <TemplateInputFormQuery input={templateInput} key={index} />
    ))}
  </TemplateBoard>
));

const handleLoad = load => {
  const userId = jwtAuth.getParsedTokenPayload().sub;
  const options = {
    params: {
      creatorId: userId
    }
  };

  templateInputApi.get("get").call(options, (err, res, status) => {
    console.log("res: ", res);
    const templateInputs = status === 404 ? [] : res.data.templateInputs;

    console.log("templateInputs: ", templateInputs);

    load(templateInputs);
  });
};

const TemplateFormQueryBoardContainer = () => (
  <LoadableBoard handleLoad={handleLoad} />
);

export { TemplateFormQueryBoardContainer };

export default TemplateFormQueryBoardContainer;
