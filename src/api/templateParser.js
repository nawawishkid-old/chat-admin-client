import APIGroup from "~/src/services/api/Model";

const templateParserGroup = new APIGroup("/api/template/parser");
const options = { auth: true };

templateParserGroup.add("get", "get", "/", options);
// templateParserGroup.add("create", "post", "/", options);
// templateParserGroup.add("update", "post", "/update", options);

templateParserGroup.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export default templateParserGroup;
