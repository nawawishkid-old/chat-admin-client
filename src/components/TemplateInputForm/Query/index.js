import React from "react";
import { Card } from "antd";
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
const TemplateInputFormQuery = ({ input, ...rest }) =>
  console.log("input: ", input.componentScheme) || (
    <Card
      actions={[
        <ActionEdit templateInputId={input._id} />,
        <ActionDelete templateInputId={input._id} />,
      ]}>
      <h3>{input.label}</h3>
      <p>{"name: " + input.name}</p>
      {input.options ? <Options input={input} /> : <NoOptions />}
      <ComponentScheme scheme={input.componentScheme} />
    </Card>
  );

const LoadableTemplateInputFormQuery = loadable(({ data }) => (
  <div>
    {data.map((item, index) => (
      <TemplateInputFormQuery input={item} key={index} />
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
