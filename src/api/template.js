import ApiModel from "~/src/services/api/ApiModel";

const templateModel = new ApiModel("/api/template");
const options = { auth: true };

templateModel.add("get", "get", "/", options);
templateModel.add("create", "post", "/", options);
templateModel.add("update", "post", "/update", options);

export default templateModel;
