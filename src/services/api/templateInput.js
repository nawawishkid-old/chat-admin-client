import ApiModel from "./ApiModel";

const templateInputModel = new ApiModel("/api/template/input");
const options = { auth: true };

templateInputModel.add("get", "get", "/", options);
templateInputModel.add("create", "post", "/", options);
templateInputModel.add("update", "post", "/update", options);

export default templateInputModel;
