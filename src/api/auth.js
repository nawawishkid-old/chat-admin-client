import APIGroup from "~/src/services/api/Model";

const authApi = new APIGroup("/auth");
const options = { auth: true };

authApi.add("getToken", "post", "/token");
authApi.add("getRefreshToken", "post", "/refresh", options);

authApi.on("all", (err, res, status) => {
  if (err) {
    console.error(`${status}: ${err.msg}`);
    return;
  }

  console.log(`${status}: ${res.msg}`);
});

export { authApi };

export default authApi;
