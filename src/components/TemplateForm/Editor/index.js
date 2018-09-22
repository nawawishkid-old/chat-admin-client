import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withForm, FormBuilder } from "~/src/services/form";
import templateFormBuilderScheme from "~/src/data/form-schemes/template-form/builder";
import { CommonForm } from "~/src/components/common/form";
import templateApi from "~/src/api/template";
import loadable from "~/src/components/Loadable";

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
    const { data } = this.props;
    const originalFieldSchemes = templateFormBuilderScheme.fields;
    const editedFieldSchemes = originalFieldSchemes.map(field => {
      console.log("data: ", field.name, "value: ", data[field.name]);
      if (field.name === "inputs") {
				field.options.initialValue = '';
        return field;
      }
      field.options.initialValue = data[field.name]; // "5555 " + templateId;

      return field;
    });
    const fields = editedFieldSchemes.map(
      field => console.log("field: ", field) || FormBuilder.makeField(field),
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
  location: PropTypes.object.isRequired,
};

const TemplateFormEditor = withForm(TemplateFormEditorView);

// const Wait = () => <h1>Loadin...</h1>;
// const Timeout = () => <h1>Timeout!</h1>;
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
// const WithRouter = withRouter(TemplateFormEditor);
// console.log("WithRouter: ", WithRouter);
const Loadable = loadable(({ data, ...rest }) => (
  <TemplateFormEditor data={data} {...rest} />
));
// const TheTemplate = () => <Loadable limit={5000} />;
const WR = withRouter(({ match }) => (
  <Loadable match={match} handleLoad={handleLoad} />
));

export default WR;
// export default TheTemplate;
// export default withRouter(withForm(TemplateFormEditorView));
