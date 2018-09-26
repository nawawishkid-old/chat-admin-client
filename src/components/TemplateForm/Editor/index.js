import React from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import defaultFieldSchemes from "~/src/data/form-schemes/template-form/builder";
import templateApi from "~/src/api/template";
import TemplateInputSelector from "../TemplateInputSelector";
import SchemebasedFormContainer, {
  loadable
} from "~/src/components/SchemebasedForm";

const TemplateFormEditorView = props => (
  <SchemebasedFormContainer
    {...props}
    defaultFieldSchemes={defaultFieldSchemes}
    handleSubmit={handleSubmit}
    handleCancel={handleCancel}
    after={after}
  />
);

const Loadable = loadable(TemplateFormEditorView);

const TemplateFormEditor = withRouter(({ match, history }) => (
  <Loadable handleLoad={handleLoad} match={match} history={history} />
));

const after = [<TemplateInputSelector />];

const handleSubmit = (values, { match }) => {
  const { templateId } = match.params;
  const options = { path: templateId, data: values };

  templateApi.get("update").call(options, (err, res) => {
    if (res) {
      console.log("UPDATED!");

      message.success(res.msg);

      return;
    }

    message.error(err.msg);
  });
};

const handleCancel = ({ history }) => history.goBack();

const handleLoad = (load, { match }) => {
  const { templateId } = match.params;
  const options = { path: templateId };

  templateApi.get("get").call(options, (err, res) => {
    if (res) {
      load(res.data.doc);
    }
  });
};

export default TemplateFormEditor;

// class TemplateFormEditorView extends React.Component {
//   handleSubmit = (formProps, values) => {
//     console.log("values: ", values);
//
//     const { templateId } = this.props.match.params;
//     const options = { path: templateId, data: values };
//
//     templateApi.get("update").call(options, (err, res) => {
//       if (res) {
//         console.log("UPDATED!");
//       }
//     });
//   };
//
//   getFields = () => {
//     const { data, form } = this.props;
//     const originalFieldSchemes = defaultFieldSchemes.fields;
//     const editedFieldSchemes = originalFieldSchemes.map(field => {
//       field.options.initialValue = data[field.name]; // "5555 " + templateId;
//
//       return field;
//     });
//     const fields = editedFieldSchemes.map(
//       field => console.log("field: ", field) || FormBuilder.makeField(field)
//     );
//
//     // Special component for displaying templates' inputs
//     const initValue = data.inputs.map(item => item._id);
//
//     fields.push(
//       <TemplateInputSelector
//         form={form}
//         initialValue={initValue}
//         key="hahaha"
//       />
//     );
//
//     return fields;
//   };
//
//   render() {
//     return (
//       <CommonForm handleSubmit={this.handleSubmit}>
//         {this.getFields()}
//       </CommonForm>
//     );
//   }
// }
//
// TemplateFormEditorView.propTypes = {
//   form: PropTypes.object.isRequired
// };
//
// const TemplateFormEditor = withForm(TemplateFormEditorView);
//
// const handleLoad = (load, props) => {
//   console.log("loadProps: ", props);
//   const { templateId } = props.match.params;
//   const options = { path: templateId };
//
//   console.log("options: ", options);
//
//   templateApi.get("get").call(options, (err, res) => {
//     if (res) {
//       console.log("Got ID!: ", res);
//       load(res.data.doc);
//     }
//   });
// };
// const Loadable = loadable(({ data, ...rest }) => (
//   <TemplateFormEditor data={data} {...rest} />
// ));
// const WR = withRouter(({ match }) => (
//   <Loadable match={match} handleLoad={handleLoad} />
// ));
//
// export default WR;
