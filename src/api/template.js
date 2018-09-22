import APIGroup from "~/src/services/api/Model";

const templateGroup = new APIGroup("/api/template");
const options = { auth: true };

templateGroup.add("get", "get", "/", options);
templateGroup.add("create", "post", "/", options);
templateGroup.add("update", "post", "/update", options);
templateGroup.add("delete", "post", "/delete", options);

templateGroup.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export default templateGroup;
