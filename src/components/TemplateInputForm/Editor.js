import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { loadable } from "~/src/components/SchemebasedForm/utils";
import { withRouter } from "react-router-dom";
import { templateInputApi } from "~/src/api/templateInput";
import TemplateInputFormCommonBuilderContainer from "./Base/Container";

/**
 * === Components ===
 */
const Loadable = loadable(TemplateInputFormCommonBuilderContainer);

const TemplateInputFormEditorLoadable = withRouter(({ match, history }) => (
  <Loadable
    handleCancel={handleCancel}
    handleLoad={handleLoad}
    handleSubmit={handleSubmit}
    match={match}
    history={history}
  />
));

/**
 * === Handlers ===
 */
const handleSubmit = (apiOptions, values, { match }) => {
  const options = {
    ...apiOptions,
    path: match.params.templateInputId
  };
  console.log("options: ", options);

  templateInputApi.get("update").call(options, (err, res) => {
    if (res) {
      message.success(res.msg);
      return;
    }

    message.error(`${err.statusText} (${err.data.msg})`);
  });
};

const handleCancel = ({ history }) => {
  history.goBack();
};

const handleLoad = (load, props) => {
  const { templateInputId } = props.match.params;
  const options = { path: templateInputId };

  templateInputApi.get("get").call(options, (err, res) => {
    if (res) {
      load(res.data.templateInput);
    }
  });
};

export { TemplateInputFormEditorLoadable };

export default TemplateInputFormEditorLoadable;
