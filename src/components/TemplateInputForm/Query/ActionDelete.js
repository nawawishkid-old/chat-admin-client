import React from "react";
import PropTypes from "prop-types";
import templateInputApi from "~/src/api/templateInput";
import { Popconfirm, message, Icon } from "antd";

const getHandleDelete = (templateInputId, handleDeleted) => () => {
  templateInputApi.get("delete").call({ path: templateInputId }, (err, res) => {
    if (res) {
      message.success("Template input deleted!");
      if (handleDeleted) {
        handleDeleted();
      }
    }
  });
};

const ActionDelete = ({ templateInputId, handleDeleted }) => (
  <Popconfirm
    title="Are you sure to delete this template input?"
    okText="Delete"
    cancelText="Cancel"
    onConfirm={getHandleDelete(templateInputId, handleDeleted)}>
    <Icon type="delete" />
  </Popconfirm>
);

ActionDelete.propTypes = {
  templateInputId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  handleDeleted: PropTypes.func
};

export default ActionDelete;
