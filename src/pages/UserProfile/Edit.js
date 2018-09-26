import React from "react";
import Page from "~/src/components/Page";
import UserProfileEditor from "~/src/components/UserProfile/Editor/Loadable";

const PageUserProfileEdit = () => (
  <Page>
    <h1>Edit your profile</h1>
    <UserProfileEditor />
  </Page>
);

export { PageUserProfileEdit };

export default PageUserProfileEdit;
