import React from "react";

const loadable = Component => {
  return class Loadable extends React.Component {
    state = {
      loaded: false,
      data: undefined,
      timeout: false
    }

    load = data => this.state.timeout 
      ? null 
      : this.setState({ loaded: true, timeout: false, data });

    getWaitComponent = () => {
      const Wait = this.props.wait;
     
      return <Wait />
    }

    getTimeoutComponent = () => {
      const Timeout = this.props.timeout;

      return <Timeout />
    }

    componentDidMount() {
      const { limit, handleLoad } = this.props;

      setTimeout(() => this.setState({ timeout: true }), limit);
      handleLoad(this.load);
    }

    render() {
      const { loaded, timeout, data } = this.state;
      if (!loaded) {
        return timeout 
          ? this.getTimeoutComponent()
          : this.getWaitComponent();
      }

      return <Component data={data} />
    }
  }
}

export default loadable;
