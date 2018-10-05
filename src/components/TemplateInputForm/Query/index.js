import React from "react";
import { Col, Card } from "antd";
import loadable from "~/src/components/Loadable";
import templateInputApi from "~/src/api/templateInput";
import ActionEdit from "./ActionEdit";
import ActionDelete from "./ActionDelete";

const Options = input => (
  <div>
    <p>Options:</p>
    {Object.keys(input.options).map((key, index) => (
      <p>
        <span>{key}</span>
        <span>{input.options[key]}</span>
      </p>
    ))}
  </div>
);
const NoOptions = () => <p>Options: none</p>;
const ComponentScheme = ({ scheme }) => (
  <div>
    <p>Type: {scheme.type}</p>
    <p>
      Props: <code>{JSON.stringify(scheme.props)}</code>
    </p>
  </div>
);
class TemplateInputFormQuery extends React.Component {
  state = {
    deleted: false
  };

  /**
   * Handle after delete operation
   */
  handleDeleted = () => this.setState({ deleted: true });

  render() {
    if (this.state.deleted) {
      return null;
    }

    const { input, ...rest } = this.props;

    return (
      <Card
        actions={[
          <ActionEdit templateInputId={input._id} />,
          <ActionDelete
            templateInputId={input._id}
            handleDeleted={this.handleDeleted}
          />
        ]}>
        <h3>{input.label}</h3>
        <p>{"name: " + input.name}</p>
        {input.options ? <Options input={input} /> : <NoOptions />}
        {input.componentScheme ? (
          <ComponentScheme scheme={input.componentScheme} />
        ) : null}
      </Card>
    );
  }
}

const LoadableTemplateInputFormQuery = loadable(({ data }) => (
  <div>
    {data.map((item, index) => (
      <Col
        xs={24}
        md={12}
        lg={8}
        key={index}
        style={{ padding: "0 1em", marginBottom: "1em" }}>
        <TemplateInputFormQuery input={item} key={index} />
      </Col>
    ))}
  </div>
));

const handleLoad = load => {
  templateInputApi.get("get").call((err, res) => {
    if (res) {
      load(res.data.templateInput);
    }
  });
};

const Loadable = props => (
  <LoadableTemplateInputFormQuery handleLoad={handleLoad} />
);

export default Loadable;
