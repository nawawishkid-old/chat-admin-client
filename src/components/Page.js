import React from "react";
import PropTypes from "prop-types";

class Page extends React.Component {
  componentDidMount() {
    document.title = this.props.title + " | " + REACT_APP_NAME;
  }

  render() {
    const { children, title, ...rest } = this.props;

    return <div {...rest}>{children}</div>;
  }
}

Page.defaultProps = {
  title: REACT_APP_NAME
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
