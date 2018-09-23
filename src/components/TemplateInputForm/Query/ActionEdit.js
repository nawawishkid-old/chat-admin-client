import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const ActionEdit = ({ templateInputId }) => (
  <Link to={"/admin/template-inputs/" + templateInputId + "/edit"}>
    <Icon type="edit" />
  </Link>
);

export default ActionEdit;
