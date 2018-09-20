import APIGroup from "~/src/services/api/Model";

const authGroup = new APIGroup("/auth");
const options = { auth: true };

authGroup.add("getToken", "post", "/token");
authGroup.add("getRefreshToken", "post", "/refresh", options);

authGroup.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export default authGroup;
