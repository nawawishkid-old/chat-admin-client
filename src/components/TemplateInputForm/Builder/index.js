import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card } from "antd";
import templateInputApi from "~/src/api/templateInput";
import { withForm } from "~/src/services/form";

class TemplateInputFormBuilder extends React.Component {
  render() {
    return (
      <Card>
        <Form>
          hhhh
          <Button onClick={this.handleSubmit}>Create</Button>
        </Form>
      </Card>
    );
  }
}

export default TemplateInputFormBuilder;
