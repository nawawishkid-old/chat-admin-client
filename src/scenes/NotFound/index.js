import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: props.countdown
    };
  }

  countdown = () => {
    setTimeout(() => {
      if (this._isMounted) {
        this.setState({ countdown: this.state.countdown - 1 });
      }
    }, 1000);
  };

  componentDidMount = () => {
    this._isMounted = true;
    this.countdown();
  };

  componentDidUpdate = () => {
    this.countdown();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    const { countdown } = this.state;

    if (countdown === 0) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>404 Not Found :P</h1>
        <p>Will be redirected in {countdown}</p>
      </div>
    );
  }
}

NotFound.defaultProps = {
  countdown: 5
};

NotFound.propTypes = {
  countdown: PropTypes.number
};

export { NotFound };

export default NotFound;
