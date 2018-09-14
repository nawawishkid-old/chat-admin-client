import React from "react";
import { Select } from "antd";
import templateApi from "~/src/services/api/template";

class InputSelector extends React.Component {
  state = {};

  componentDidMount() {
    templateApi.exec("get", null, res => this.setState({ docs: res.doc }));
  }

  render() {
    // return <Select>{}</Select>;
    const result =
      this.state.docs === undefined
        ? "hi!"
        : this.state.docs.map(item => <div>{item.name}</div>);

    return (
      <div>
        <h1>Helooooooooo!</h1>
        {result}
      </div>
    );
  }
}

export default InputSelector;
