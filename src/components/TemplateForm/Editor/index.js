import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import defaultFieldSchemes from "~/src/data/form-schemes/template-form/builder";
import templateApi from "~/src/api/template";
import TemplateInputSelector from "../TemplateInputSelector";
import SchemebasedFormContainer, {
  loadable,
  withProps
} from "~/src/components/SchemebasedForm";

const TemplateFormEditorView = props => (
  <SchemebasedFormContainer
    {...props}
    defaultFieldSchemes={defaultFieldSchemes}
    handleSubmit={handleSubmit}
    handleCancel={handleCancel}
    after={after}
  />
);

const Loadable = loadable(TemplateFormEditorView);

const TemplateFormEditor = withRouter(({ match, history }) => (
  <Loadable handleLoad={handleLoad} match={match} history={history} />
));

const TemplateInputSelectorWithDoc = withProps(({ doc, form }) => (
  <TemplateInputSelector
    form={form}
    inputs={doc.inputs}
    initialValues={doc.inputs.map(input => input._id)}
  />
));

const after = [<TemplateInputSelectorWithDoc />];

const handleSubmit = (values, { match, history }) => {
  const { templateId } = match.params;
  const options = { path: templateId, data: values };

  templateApi.get("update").call(options, (err, res) => {
    if (res) {
      message.success(res.msg);

      setTimeout(() => history.goBack(), 1500);

      return;
    }

    message.error(err.msg);
  });
};

const handleCancel = ({ history }) => history.goBack();

const handleLoad = (load, { match }) => {
  const { templateId } = match.params;
  const options = { path: templateId };

  templateApi.get("get").call(options, (err, res) => {
    load(res.data.template);
  });
};

export default TemplateFormEditor;
