import APIGroup from "~/src/services/api/Model";

const templateParserApi = new APIGroup("/api/template/parser");
const options = { auth: true };

templateParserApi.add("get", "get", "/", options);
// templateParserApi.add("create", "post", "/", options);
// templateParserApi.add("update", "post", "/update", options);

templateParserApi.on("all", (err, res, status) => {
  if (err) {
    console.log(`${status}: ${err.data.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export default templateParserApi;
