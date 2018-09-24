import React from "react";
import PropTypes from "prop-types";
import loadable from "~/src/components/Loadable";
import { withRouter } from "react-router-dom";
import { templateInputApi } from "~/src/api/templateInput";
import TemplateInputFormEditorContainer from "./Container";

const Loadable = loadable(({ data, ...rest }) => (
  <TemplateInputFormEditorContainer data={data} {...rest} />
));

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
