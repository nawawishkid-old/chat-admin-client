import React from "react";
import PropTypes from "prop-types";
import { Upload, Avatar, Button } from "antd";
import styled from "styled-components";
import SchemebasedFormView from "~/src/components/SchemebasedForm/View";

const ProfileImageUploader = styled(props => (
  <Upload name="profile-image">
    <div {...props}>Upload</div>
  </Upload>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 50px;
  height: 50px;
  border: 1px dashed pink;
`;

const UserProfileEditorView = props => (
  <SchemebasedFormView before={<ProfileImageUploader />} {...props} />
);

export { UserProfileEditorView };

export default UserProfileEditorView;
