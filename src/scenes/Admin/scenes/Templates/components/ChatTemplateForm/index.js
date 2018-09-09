import React from "react";
import ServiceForm, {
  withGenderInput,
  withApiHandling
} from "../../../../../../components/ServiceForm/index";

const SFWithGenderInputAndApiHandling = withApiHandling(
  withGenderInput(ServiceForm)
);

const ChatTemplateForm = props => (
  <SFWithGenderInputAndApiHandling
    title={`Get '${props.title}' template`}
    inputs={props.inputs || []}
    controllers={props.controllers || []}
    method="get"
    path={`${props.serviceSlug}.php`}
    dataKey={props.dataKey || "template"}
  />
);

export default ChatTemplateForm;
