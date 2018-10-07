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


      handleSubmit(this.props, values);
    });
  };

  handleCancel = () => {
    this.props.handleCancel(this.props);
  };

  render() {
    const {
      children,
      form,
      handleSubmit,
      handleCancel,
      submitText,
      cancelText,
			submitButtonProps,
      ...rest
    } = this.props;

		const submitBtnProps = submitButtonProps || {};

    return (
      <Form {...rest}>
        {React.Children.map(children, (child, index) => {
          if (child === null) {
            return null;
          }

          const ClonedElement = React.cloneElement(child, { form, key: index });

					return ClonedElement;
        })}
        <Form.Item>
          <Button onClick={this.handleSubmit} {...submitBtnProps}>{submitText || "Submit"}</Button>
          {handleCancel ? (
            <Button onClick={this.handleCancel}>
              {cancelText || "Cancel"}
            </Button>
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
