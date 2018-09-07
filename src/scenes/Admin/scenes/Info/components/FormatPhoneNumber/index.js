import React from "react";
import { Presentation } from "../../../../../../components/ServiceForm/index";
import { Button, Input } from "antd";

import "antd/dist/antd.css";

// Use copiable output from Container,
// but write your own phone number formatting algo to handle 'Get' button

class FormatPhoneNumber extends React.Component {
  state = {
    isLoading: false
  };

  _handleClick = () => {};

  _getTextAreaOutput = () => {
    const { TextArea } = Input;

    return (
      <TextArea
        defaultValue=""
        onChange={event => this.setState({ output: event.target.value })}
        ref={this.output}
        onCopy={event => {
          console.log("I'm copied!!!");
        }}
      />
    );
  };

  _getSubmitButton = () => {
    return (
      <Button
        loading={this.state.isLoading}
        type="primary"
        onClick={this._handleClick}
      >
        Get
      </Button>
    );
  };

  render = () => {
    return (
      <Presentation
        title="Format phone number"
        controllers={this._getSubmitButton()}
        output={this._getTextAreaOutput()}
      />
    );
  };
}

export default FormatPhoneNumber;
