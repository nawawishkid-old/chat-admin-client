import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withForm, FormBuilder } from "~/src/services/form";
import templateFormBuilderScheme from "~/src/data/form-schemes/template-form/builder";
import { CommonForm } from "~/src/components/common/form";
import { templateApi, templateInputApi } from "~/src/api";
import loadable from "~/src/components/Loadable";
import TemplateInputSelector from '../TemplateInputSelector';

class TemplateFormEditorView extends React.Component {
  handleSubmit = (formProps, values) => {
    console.log("values: ", values);

    const { templateId } = this.props.match.params;
    const options = { path: templateId, data: values };

    templateApi.get("update").call(options, (err, res) => {
      if (res) {
        console.log("UPDATED!");
      }
    });
  };

  getFields = () => {
    const { data, form } = this.props;
    const originalFieldSchemes = templateFormBuilderScheme.fields;
    const editedFieldSchemes = originalFieldSchemes.map(field => {
      field.options.initialValue = data[field.name]; // "5555 " + templateId;

      return field;
    });
    const fields = editedFieldSchemes.map(
      field => console.log("field: ", field) || FormBuilder.makeField(field),
    );

    // Special component for displaying templates' inputs
    const initValue = data.inputs.map(item => item._id);

    fields.push(
      <TemplateInputSelector form={form} initialValue={initValue} key="hahaha" />,
    );

    return fields;
  };

  render() {
    return (
      <CommonForm handleSubmit={this.handleSubmit}>
        {this.getFields()}
      </CommonForm>
    );
  }
}

TemplateFormEditorView.propTypes = {
  form: PropTypes.object.isRequired,
};

const TemplateFormEditor = withForm(TemplateFormEditorView);

const handleLoad = (load, props) => {
  console.log("loadProps: ", props);
  const { templateId } = props.match.params;
  const options = { path: templateId };

  console.log("options: ", options);

  templateApi.get("get").call(options, (err, res) => {
    if (res) {
      console.log("Got ID!: ", res);
      load(res.data.doc);
    }
  });
};
const Loadable = loadable(({ data, ...rest }) => (
  <TemplateFormEditor data={data} {...rest} />
));
const WR = withRouter(({ match }) => (
  <Loadable match={match} handleLoad={handleLoad} />
));

export default WR;
