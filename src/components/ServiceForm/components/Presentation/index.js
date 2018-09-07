import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

class ServiceFormPresenta extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isCopied: false
    };
  }

  getSubComponentEventListeners(props) {
    let listeners = {};

    for (let key in props) {
      if (key.substr(0, 2) === "on") {
        listeners[key] = event => props[key](this, event);
      }
    }

    return listeners;
  }

  transformSubComponent = (component, key, className) => {
    const listeners = this.getSubComponentEventListeners(component.props);
    const props = {
      ...component.props,
      key: key,
      className:
        className +
        (component.props.className === undefined
          ? ""
          : ` ${component.props.className}`),
      ...listeners
    };

    return React.cloneElement(component, props);
  };

  render() {
    return (
      <Card title={this.props.title} hoverable className="sf">
        {/*<h3 className="sf__title">{this.props.title}</h3>*/}
        <div className="sf__sec-output">{this.props.output}</div>
        <div className="sf__sec-error">{this.props.error}</div>
        <div className="sf__sec-input">{this.props.inputs}</div>
        <div className="sf__sec-controller">{this.props.controllers}</div>
      </Card>
    );
  }
}

ServiceFormPresenta.propTypes = {
  output: PropTypes.node,
  error: PropTypes.node,
  inputs: PropTypes.node,
  controllers: PropTypes.node
};

export default ServiceFormPresenta;
