import APIGroup from "~/src/services/api/Model";

const templateInputApi = new APIGroup("/api/template/input");
const options = { auth: true };

templateInputApi.add("get", "get", "/", options);
templateInputApi.add("create", "post", "/", options);
templateInputApi.add("update", "post", "/update", options);

templateInputApi.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.statusText} (${err.data.msg})`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export { templateInputApi };

export default templateInputApi;
