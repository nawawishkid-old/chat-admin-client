import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const ActionEdit = ({ templateId }) => (
  <Link to={"/admin/template/edit/" + templateId}>
    <Icon type="edit" />
  </Link>
);

export default ActionEdit;
