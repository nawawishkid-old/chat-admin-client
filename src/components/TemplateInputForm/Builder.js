import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { templateInputApi } from "~/src/api/templateInput";
import TemplateInputFormBase from "./Base";

const TemplateInputFormBuilder = withRouter(({ history }) => (
  <TemplateInputFormBase handleSubmit={handleSubmit} history={history} />
));

const handleSubmit = (apiOptions, values, { history }) => {
  templateInputApi.get("create").call(apiOptions, (err, res) => {
    if (res) {
      message.success(res.msg);

      setTimeout(() => history.goBack(), 1500);

      return;
    }

    message.error(`${err.statusText} (${err.data.msg})`);
  });
};

export { TemplateInputFormBuilder };

export default TemplateInputFormBuilder;
