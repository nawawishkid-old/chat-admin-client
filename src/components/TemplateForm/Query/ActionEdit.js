import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const ActionEdit = ({ templateId }) => (
  <Link to={"/admin/templates/" + templateId + "/edit"}>
    <Icon type="edit" />
  </Link>
);

export default ActionEdit;
