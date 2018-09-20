import React from "react";
import templateApi from "~/src/api/template";
import { Popconfirm, message, Icon } from "antd";

const getHandleDelete = (templateId, handleDeleted) => () => {
  // templateApi.exec("delete", { path: templateId }, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  //   handleDeleted()

  //   message.success("Template deleted!");
  // });

  // Mock
  setTimeout(() => {
    message.success("Template deleted!");
    handleDeleted();
  }, 500);
};

const ActionDelete = ({ templateId, handleDeleted }) => (
  <Popconfirm
    title="Are you sure to delete this template?"
    okText="Delete"
    cancelText="Cancel"
    onConfirm={getHandleDelete(templateId, handleDeleted)}
  >
    <Icon type="delete" />
  </Popconfirm>
);

export default ActionDelete;
