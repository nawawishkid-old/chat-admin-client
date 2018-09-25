import React from "react";
import PropTypes from "prop-types";
import { CommonForm } from "~/src/components/common/form";
import { FormBuilder } from "~/src/services/form";


class SettingsAccountView extends React.Component {
  handleSubmit = (err, values) => {
    if (err) {
      return;
    }

    console.log("values: ", values);

    handleSubmit(values);
  };

  render() {
    const {
      form,
      fieldSchemes,
      handleSubmit,
      handleCancel,
      ...rest
    } = this.props;

    return (
      <CommonForm
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        submitText="Save">
        {fieldSchemes.map(scheme => FormBuilder.makeField(scheme))}
      </CommonForm>
    );
  }
}

export { SettingsAccountView };

export default SettingsAccountView;
