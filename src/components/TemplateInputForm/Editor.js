import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import loadable from "~/src/components/Loadable";
import { withRouter } from "react-router-dom";
import { templateInputApi } from "~/src/api/templateInput";
import TemplateInputFormCommonBuilderContainer from "./commons/Builder/Container";

const Loadable = loadable(({ data, ...rest }) => (
  <TemplateInputFormCommonBuilderContainer
    doc={data}
    handleSubmit={handleSubmit}
    {...rest}
  />
));

const handleSubmit = apiOptions => {
  templateInputApi.get("update").call(options, (err, res) => {
    if (res) {
      message.success(res.msg);
      return;
    }

    message.error(`${err.statusText} (${err.data.msg})`);
  });
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

// Supply 'match' props to the component
const TemplateInputFormEditorLoadable = withRouter(({ match }) => (
  <Loadable match={match} handleLoad={handleLoad} />
));

export { TemplateInputFormEditorLoadable };

export default TemplateInputFormEditorLoadable;
