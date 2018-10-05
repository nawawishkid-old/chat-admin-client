import React from "react";
import PropTypes from "prop-types";
import { APP_NAME } from "~/src/configs";

class Page extends React.Component {
  componentDidMount() {
    document.title = this.props.title + " | " + APP_NAME;
  }

  render() {
    const { children, ...rest } = this.props;

    return <div {...rest}>{children}</div>;
  }
}

Page.defaultProps = {
  title: APP_NAME
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
