import React from "react";
// import styled from "styled-components";
import BaseForm from "../Base";

const ChatTemplateForm = ({ title, decorators, form, ...rest }) => (
  <div>
    <p>{title}</p>
    <BaseForm {...rest}>
      {decorators.map((item, index) =>
        form.getFieldDecorator(item.id, item.options)(item.component)
      )}
    </BaseForm>
  </div>
);

export default ChatTemplateForm;
