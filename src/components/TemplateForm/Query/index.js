import React from "react";
import PropTypes from "prop-types";
import loadable from "~/src/components/Loadable";
import templateApi from "~/src/api/template";
import { Form, Card, Icon, Input, Button, Popconfirm, message } from "antd"
import { FormBuilder } from "~/src/services/form";

// const MODE_ACTIVE = 1;
// const MODE_DELETE = 0;
const mockFieldScheme = {
  name: "mock",
  label: "Mock",
  componentScheme: {
    type: "text"
  }
};
const handleDelete = () => message.success("Template deleted!");
const DeleteAction = () => (
  <Popconfirm 
    title="Are you sure to delete this template?"
    okText="Delete"
    cancelText="Cancel"
    onConfirm={handleDelete}
  >
    <Icon type="delete" />
  </Popconfirm>
);
const cardActions = [
  <Icon type="edit" />,
  <DeleteAction />
];
const ViewActive = props => {
  console.log('props: ', props);
  const { form, output, handleSubmit, handleCopy, fieldSchemes, children, ...rest } = props;

  return (
    <Card actions={cardActions}>
      <Form>
      <div className="inputs">
        {fieldSchemes.map(scheme => FormBuilder.makeField(scheme, form))}
        {children}
      </div>
      <div className="output">
        <Input.TextArea defaultValue={output} />
      </div>
      <div className="controller">
        <p>
          <Button onClick={handleSubmit}>Get</Button>
          <Button onClick={handleCopy}>Copy</Button>
        </p>
      </div>
      </Form>
    </Card>
  );
};

ViewActive.propTypes = {
  fieldSchemes: PropTypes.array.isRequired,
  output: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired
};

// const ViewActiveForm = Form.create()(ViewActive);

class TemplateFormQuery extends React.Component {
  state = { output: "" }

  handleSubmit = () => {
    console.log('handleSubmit()');
  }

  handleCopy = () => {
    console.log("handleCopyText()");
    const textArea = document.createElement("textarea");

    textArea.innerText = this.state.output;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  render() {
    const { form, fieldSchemes, ...rest } = this.props;

    return (
      <ViewActive
        form={form}
        output={this.state.output} 
        fieldSchemes={fieldSchemes}
        handleSubmit={this.handleSubmit}
        handleCopy={this.handleCopy}
        {...rest}
      />
    );
  }
}

const TheForm = Form.create()(TemplateFormQuery);

const NeedLoadable = ({ data }) => data.map(doc => <TheForm fieldSchemes={doc.inputs} />)
// <TemplateFormQuery inputs={data.inputs} />

const LoadableTemplateFormQuery = loadable(NeedLoadable);

const Wait = () => <h3>Loading...</h3>;
const Timeout = () => <h3>Timeout!</h3>;
const handleLoad = load => templateApi.exec('get', null, (err, res) => {
  if (err) { console.log(err); return; }
  console.log('res: ', res);
  load(res.doc);
});
const Main = () => <LoadableTemplateFormQuery handleLoad={handleLoad} wait={Wait} timeout={Timeout} limit={3000} />

export default Main; // TemplateFormQuery;
