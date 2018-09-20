import React from "react";
import PropTypes from "prop-types";
import templateParserApi from "~/src/api/templateParser";
import { withForm } from "~/src/services/form";
import TemplateFormQueryView from "./View";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";

class NoFormTemplateFormQuery extends React.Component {
  state = { output: "" };

  handleSubmit = () => {
    console.log("handleSubmit()");
    // templateParserApi.exec('get', null, (err, res) => {
    //   if (err) { console.log(err); return; }
    //   console.log('res: ', res);
    //   this.setState({ output: res.data })
    // });
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

  handleOutputChange = e => this.setState({ output: e.target.value });

  handleDeleted = () => this.setState({ deleted: true });

  render() {
    if (this.state.deleted) {
      return null;
    }

    const { form, fieldSchemes, templateId, ...rest } = this.props;

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
          />
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
    .isRequired
};

const TemplateFormQuery = withForm(NoFormTemplateFormQuery);

export default TemplateFormQuery;
