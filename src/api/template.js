import APIGroup from "~/src/services/api/Model";

const templateApi = new APIGroup("/api/template");
const options = { auth: true };

templateApi.add("get", "get", "/", options);
templateApi.add("create", "post", "/", options);
templateApi.add("update", "post", "/update", options);
templateApi.add("delete", "post", "/delete", options);

templateApi.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export { templateApi };

export default templateApi;
