import React from "react";
import { message } from "antd";
import userApi from "~/src/api/user";
import { jwtAuth } from "~/src/services/auth";
import loadable from "~/src/components/SchemebasedForm/utils";
import UserProfileEditorContainer from "./Container";

const UnwrappedUserProfileEditorLoadable = loadable(UserProfileEditorContainer);

const handleSubmit = values => {
  const path = jwtAuth.getParsedTokenPayload().sub;
  const options = {
    data: values,
    path
  };

  userApi.get("update").call(options, (err, res) => {
		if (res) {
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

const UserProfileEditorLoadable = () => (
  <UnwrappedUserProfileEditorLoadable
    handleLoad={handleLoad}
    handleSubmit={handleSubmit}
  />
);

export { UserProfileEditorLoadable };

export default UserProfileEditorLoadable;
