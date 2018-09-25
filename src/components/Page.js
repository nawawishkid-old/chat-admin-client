import React from "react";
import PropTypes from "prop-types";

class Page extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
