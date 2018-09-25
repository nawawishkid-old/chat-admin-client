import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const ActionEdit = ({ templateInputId }) => (
  <Link to={"/admin/template-inputs/" + templateInputId + "/edit"}>
    <Icon type="edit" />
  </Link>
);

ActionEdit.propTypes = {
  templateInputId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ActionEdit;
