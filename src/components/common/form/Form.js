import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "antd";

class UnwrappedCommonForm extends React.Component {
  handleSubmit = () => {
    const { form, handleSubmit } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        console.log("err: ", err);
        return;
      }

      console.log("form.values: ", values);

      handleSubmit(this.props, values);
    });
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    const { children, form, handleSubmit, handleCancel, submitText, cancelText, ...rest } = this.props;

    return (
      <Form {...rest}>
        {React.Children.map(children, (child, index) => {
          // console.log("child: ", child);
          if (child === null) {
            return null;
          }

          return React.cloneElement(child, { form, key: index });
        })}
        <Form.Item>
          <Button onClick={this.handleSubmit}>{submitText || "Submit"}</Button>
          {handleCancel ? (
            <Button onClick={this.handleCancel}>{cancelText || "Cancel"}</Button>
          ) : null}
        </Form.Item>
      </Form>
    );
  }
}

UnwrappedCommonForm.propTypes = {
  handleSubmit: PropTypes.func
};

const CommonForm = Form.create()(UnwrappedCommonForm);

export { CommonForm };

export default CommonForm;
