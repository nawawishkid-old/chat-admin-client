import APIGroup from "~/src/services/api/Model";

const authModel = new APIGroup("/auth");
const options = { auth: true };

authModel.add("getToken", "post", "/token");
authModel.add("getRefreshToken", "post", "/refresh", options);

export default authModel;
