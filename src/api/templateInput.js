import APIGroup from "~/src/services/api/Model";

const templateInputGroup = new APIGroup("/api/template/input");
const options = { auth: true };

templateInputGroup.add("get", "get", "/", options);
templateInputGroup.add("create", "post", "/", options);
templateInputGroup.add("update", "post", "/update", options);

templateInputGroup.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export default templateInputGroup;
