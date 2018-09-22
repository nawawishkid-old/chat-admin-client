import React from "react";
import PropTypes from "prop-types";

class Loadable extends React.Component {
  state = {
    loaded: false,
    data: undefined,
    timeout: false,
  };

  load = (data = {}) =>
    this.state.timeout
      ? null
      : this.setState({ loaded: true, timeout: false, data });

  getWaitComponent = () => {
    const Wait = this.props.wait;

    return <Wait />;
  };

  getTimeoutComponent = () => {
    const Timeout = this.props.timeout;

    return <Timeout />;
  };

  componentDidMount() {
    console.log("Loadable.componentDidMount()");
    const { limit, handleLoad } = this.props;

    setTimeout(() => this.setState({ timeout: true }), limit);
    handleLoad(this.load, this.props);
  }

  render() {
    const { loaded, timeout, data } = this.state;
    const { component: Component, ...rest } = this.props;

    if (!loaded) {
      return timeout ? this.getTimeoutComponent() : this.getWaitComponent();
    }

    return <Component data={data} {...rest} />;
  }
}

Loadable.propTypes = {
  // component: PropTypes.node.isRequired,
  // wait: PropTypes.element,
  // timeout: PropTypes.element,
  limit: PropTypes.number,
  handleLoad: PropTypes.func.isRequired,
};

Loadable.defaultProps = {
  limit: 10000,
  wait: () => <h1>Loading...</h1>,
  timeout: () => <h1>...wait timeout!</h1>,
};

const loadable = Component => props => (
  <Loadable component={Component} {...props} />
);

export default loadable;
