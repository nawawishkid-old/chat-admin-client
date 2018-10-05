import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { templateApi } from "~/src/api/template";
import defaultFieldSchemes from "~/src/data/form-schemes/template-form/builder";
import TemplateInputSelector from "./TemplateInputSelector";
import SchemebasedFormContainer from "~/src/components/SchemebasedForm/Container";

const TemplateFormBuilder = () => (
  <SchemebasedFormContainer
    defaultFieldSchemes={defaultFieldSchemes}
    handleSubmit={handleSubmit}
    after={after}
    submitText="Create"
  />
);

const after = [<TemplateInputSelector />];

const handleSubmit = (values, { form }) => {
  templateApi.get("create").call({ data: values }, (err, res) => {
    if (res) {
      console.log(res.msg);

      form.resetFields();
      message.success(res.msg);

      return;
    }

    message.error(err.msg);
  });
};

export default TemplateFormBuilder;
