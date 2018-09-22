import React from "react";
import templateApi from "~/src/api/template";
import { Popconfirm, message, Icon } from "antd";

const getHandleDelete = (templateId, handleDeleted) => () => {
  templateApi.get("delete").call({ path: templateId }, (err, res) => {
    if (res) {
      message.success("Template deleted!");
      handleDeleted();
    }
  });
};

const ActionDelete = ({ templateId, handleDeleted }) => (
  <Popconfirm
    title="Are you sure to delete this template?"
    okText="Delete"
    cancelText="Cancel"
    onConfirm={getHandleDelete(templateId, handleDeleted)}>
    <Icon type="delete" />
  </Popconfirm>
);

export default ActionDelete;
