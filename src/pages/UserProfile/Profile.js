import React from "react";
import Page from "~/src/components/Page";
import UserProfile from "~/src/components/UserProfile";

const PageUserProfile = () => (
  <Page title="Profile">
    <h1>Profile</h1>
    <UserProfile />
  </Page>
);

export { PageUserProfile };

export default PageUserProfile;
