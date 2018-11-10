import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { message } from "antd";
import { templateApi } from "~/src/api/template";
import defaultFieldSchemes from "~/src/data/form-schemes/template-form/builder";
import TemplateInputSelector from "./TemplateInputSelector";
import SchemebasedFormContainer from "~/src/components/SchemebasedForm/Container";

const TemplateFormBuilder = props => (
  <SchemebasedFormContainer
    defaultFieldSchemes={defaultFieldSchemes}
    handleSubmit={handleSubmit}
    handleCancel={handleCancel}
    after={after}
    submitText="Create"
    {...props}
  />
);

const TemplateFormBuilderWithHistory = withRouter(({ history }) => <TemplateFormBuilder history={history} />);

const after = [<TemplateInputSelector />];

const handleSubmit = (values, { form }) => {
  templateApi.get("create").call({ data: values }, (err, res) => {
    if (res) {
      form.resetFields();
      message.success(res.msg);

      return;
    }

    message.error(err.msg);
  });
};

const handleCancel = ({ history }) => history.goBack();

export default TemplateFormBuilderWithHistory;
