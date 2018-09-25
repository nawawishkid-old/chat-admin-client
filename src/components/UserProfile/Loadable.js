import React from "react";
import userApi from "~/src/api/user";
import loadable from "~/src/components/Loadable";
import { jwtAuth } from "~/src/services/auth";
import UserProfileContainer from "./Container";

const UnwrappedUserProfileLoadable = loadable(({ data }) => (
  <UserProfileContainer user={data} />
));

const handleLoad = load => {
  const path = jwtAuth.getParsedTokenPayload().sub;
  const options = { path };

  userApi.get("get").call(options, (err, res) => {
    if (res) {
      load(res.data.user);
    }
  });
};

const UserProfileLoadable = () => (
  <UnwrappedUserProfileLoadable handleLoad={handleLoad} />
);

export { UserProfileLoadable };

export default UserProfileLoadable;
