import React from "react";
import { message } from "antd";
import userApi from "~/src/api/user";
import { withAuth, jwtAuth } from "~/src/services/auth";
import { loadable } from "~/src/components/SchemebasedForm/utils";
import UserProfileEditorContainer from "./Container";

const UnwrappedUserProfileEditorLoadable = loadable(UserProfileEditorContainer);

const getHandleSubmit = updateUserData => values => {
  const path = jwtAuth.getParsedTokenPayload().sub;
  const options = {
    data: values,
    path
  };

  userApi.get("update").call(options, (err, res) => {
    if (res) {
      updateUserData();
      message.success(res.msg);

      return;
    }

    message.error(err.msg);
  });
};

const handleLoad = load => {
  const path = jwtAuth.getParsedTokenPayload().sub;
  const options = { path };

  userApi.get("get").call(options, (err, res) => {
    if (res) {
      load(res.data.user);
    }
  });
};

const UserProfileEditorLoadable = withAuth(({ updateUserData }) => (
  <UnwrappedUserProfileEditorLoadable
    handleLoad={handleLoad}
    handleSubmit={getHandleSubmit(updateUserData)}
  />
));

export { UserProfileEditorLoadable };

export default UserProfileEditorLoadable;
