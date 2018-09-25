import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Upload, Avatar, Button } from "antd";
import styled from "styled-components";
import { CommonForm } from "~/src/components/common/form";
import { FormBuilder } from "~/src/services/form";

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

class UserProfileEditorView extends React.Component {
  handleSubmit = (err, values) => {
    if (err) {
      return;
    }

    console.log("values: ", values);

    handleSubmit(values);
  };

  render() {
    const {
      form,
      fieldSchemes,
      handleSubmit,
      handleCancel,
      ...rest
    } = this.props;

    return (
      <CommonForm
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        submitText="Save">
        <ProfileImageUploader />
        {fieldSchemes.map(scheme => FormBuilder.makeField(scheme))}
      </CommonForm>
    );
  }
}

export { UserProfileEditorView };

export default UserProfileEditorView;
