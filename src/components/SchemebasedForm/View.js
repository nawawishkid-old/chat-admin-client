import React from "react";
import PropTypes from "prop-types";
import { CommonForm } from "~/src/components/common/form";
import { FormBuilder } from "~/src/services/form";

const SchemebasedFormView = ({ form, fieldSchemes, ...rest }) => (
  <CommonForm {...rest}>
    {fieldSchemes.map(scheme => FormBuilder.makeField(scheme))}
  </CommonForm>
);

export { SchemebasedFormView };

export default SchemebasedFormView;
