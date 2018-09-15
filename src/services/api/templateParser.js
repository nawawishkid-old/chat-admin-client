import ApiModel from "./ApiModel";

const templateParserModel = new ApiModel("/api/template/parser");
const options = { auth: true };

templateParserModel.add("get", "get", "/", options);
// templateParserModel.add("create", "post", "/", options);
// templateParserModel.add("update", "post", "/update", options);

export default templateParserModel;
