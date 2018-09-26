import React from "react";
import PropTypes from "prop-types";
import { CommonForm } from "~/src/components/common/form";
import { SchemebasedFormConsumer } from "./Context";

class Form extends React.Component {
  getHandleSubmit = (handleSubmit, rest) => (formProps, values) => {
    const props = { ...rest, ...formProps };

    // This is inconsistency of parameters order, should be fixed.
    handleSubmit(values, props);
  };

  getHandleCancel = (handleCancel, rest) => formProps => {
    const props = { ...rest, ...formProps };

    handleCancel(props);
  };

  render() {
    const { children } = this.props;

    return (
      <SchemebasedFormConsumer>
        {({ handleSubmit, handleCancel, submitText, cancelText, ...rest }) => (
          <CommonForm
            handleSubmit={this.getHandleSubmit(handleSubmit, rest)}
            handleCancel={this.getHandleCancel(handleCancel, rest)}
            submitText={submitText}
            cancelText={cancelText}>
            {children}
          </CommonForm>
        )}
      </SchemebasedFormConsumer>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

export { Form };

export default Form;
