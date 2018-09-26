import React from "react";
import PropTypes from "prop-types";

class Loadable extends React.Component {
  state = {
    loaded: false,
    data: undefined,
    timeout: false
  };

  load = (data = {}) =>
    this.state.timeout
      ? null
      : this.setState({ loaded: true, timeout: false, data });

  componentDidMount() {
    const { limit, handleLoad } = this.props;

    setTimeout(() => {
      if (this.state.loaded) {
        return;
      }

      this.setState({ timeout: true });
    }, limit);

    handleLoad(this.load, this.props);
  }

  render() {
    const { loaded, timeout, data } = this.state;
    const {
      component: Component,
      handleLoad,
      wait: Wait,
      timeout: Timeout,
      limit,
      ...rest
    } = this.props;

    if (!loaded) {
      return timeout ? <Timeout /> : <Wait />;
    }

    return <Component data={data} {...rest} />;
  }
}

Loadable.propTypes = {
  component: PropTypes.func.isRequired,
  wait: PropTypes.func,
  timeout: PropTypes.func,
  limit: PropTypes.number,
  handleLoad: PropTypes.func.isRequired
};

Loadable.defaultProps = {
  limit: 10000,
  wait: () => <h1>Loading...</h1>,
  timeout: () => <h1>...wait timeout!</h1>
};

const loadable = Component => props => (
  <Loadable component={Component} {...props} />
);

export default loadable;
