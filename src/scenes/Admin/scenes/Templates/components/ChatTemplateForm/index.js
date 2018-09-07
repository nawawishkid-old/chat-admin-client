import React from "react";
import ServiceForm, {
  withGenderInput,
  withApiHandling
} from "../../../../../../components/ServiceForm/index";
// import { WithGenderInput } from "../../../../components/ServiceForm/services/index";
import PropType from "prop-types";

import "antd/dist/antd.css";

const SFWithGenderInputAndApiHandling = withApiHandling(
  withGenderInput(ServiceForm)
);

class ChatTemplateForm extends React.Component {
  render() {
    return (
      <SFWithGenderInputAndApiHandling
        title={`Get '${this.props.title}' template`}
        inputs={this.props.inputs || []}
        controllers={this.props.controllers || []}
        method="get"
        path={`${this.props.serviceSlug}.php`}
        dataKey={this.props.dataKey}
      />
    );
  }
}

ChatTemplateForm.defaultProps = {
  dataKey: "template"
};

ChatTemplateForm.PropType = {
  title: PropType.string,
  serviceSlug: PropType.string,
  dataKey: PropType.string
};

export default ChatTemplateForm;
