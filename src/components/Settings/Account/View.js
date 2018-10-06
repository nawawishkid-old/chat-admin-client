import React from "react";
import PropTypes from "prop-types";
import { CommonForm } from "~/src/components/common/form";
import Field from "~/src/components/SchemebasedForm/Field";

const SettingsAccountView = ({ form, fieldSchemes, ...rest }) => (
  <CommonForm {...rest}>
    {fieldSchemes.map((scheme, index) => (
      <Field fieldScheme={scheme} key={index} form={{}} />
    ))}
  </CommonForm>
);

// export { SettingsAccountView };
// 
// export default SettingsAccountView;
