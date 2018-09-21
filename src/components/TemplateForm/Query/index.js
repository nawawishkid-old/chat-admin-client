import React from "react";
import PropTypes from "prop-types";
import templateParserApi from "~/src/api/templateParser";
import { withForm } from "~/src/services/form";
import TemplateFormQueryView from "./View";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";

class NoFormTemplateFormQuery extends React.Component {
  state = { output: "" };

	/**
	 * Handle form submission
	 */
  handleSubmit = () => {
    console.log("handleSubmit()");
    const { form, templateId } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        console.log("validateFields.err: ", err);
        return;
      }

      console.log("values: ", values);

      const options = {
        path: templateId,
        params: values,
      };

      templateParserApi.get("get").call(options, (err, res, status) => {
        if (res) {
          console.log("res: ", res);
          this.setState({ output: res.data });
        }
      });
    });
  };

  handleCopy = () => {
    console.log("handleCopyText()");
    const textArea = document.createElement("textarea");

    textArea.innerText = this.state.output;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  };

	/**
	 * Handle output component (textarea of the form) on change
	 */
  handleOutputChange = e => this.setState({ output: e.target.value });

	/**
	 * Handle after delete operation
	 */
  handleDeleted = () => this.setState({ deleted: true });

  render() {
    if (this.state.deleted) {
      return null;
    }

    const { form, fieldSchemes, templateId, ...rest } = this.props;

		console.log('output: ', this.state.output);

    return (
      <TemplateFormQueryView
        form={form}
        output={this.state.output}
        fieldSchemes={fieldSchemes}
        handleSubmit={this.handleSubmit}
        handleCopy={this.handleCopy}
        handleOutputChange={this.handleOutputChange}
        actions={[
          <ActionEdit templateId={templateId} />,
          <ActionDelete
            templateId={templateId}
            handleDeleted={this.handleDeleted}
          />,
        ]}
        {...rest}
      />
    );
  }
}

NoFormTemplateFormQuery.propTypes = {
  form: PropTypes.object.isRequired,
  fieldSchemes: PropTypes.array.isRequired,
  templateId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

const TemplateFormQuery = withForm(NoFormTemplateFormQuery);

export default TemplateFormQuery;
