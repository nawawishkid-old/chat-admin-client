import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { templateInputApi } from "~/src/api/templateInput";
import TemplateInputFormCommonBuilderContainer from "./Base/Container";

const TemplateInputFormBuilderContainer = () => (
  <TemplateInputFormCommonBuilderContainer handleSubmit={handleSubmit} />
);

const handleSubmit = apiOptions => {
  templateInputApi.get("create").call(apiOptions, (err, res) => {
    if (res) {
      message.success(res.msg);
      return;
    }

    message.error(`${err.statusText} (${err.data.msg})`);
  });
};

export { TemplateInputFormBuilderContainer };

export default TemplateInputFormBuilderContainer;
