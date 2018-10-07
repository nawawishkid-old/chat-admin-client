import React from "react";
import PropTypes from "prop-types";
import View from "./View";

class TemplateInputFormQueryContainer extends React.Component {
  state = {
    isDeleted: false
  };

  /**
   * Handle after delete operation
   */
  handleDeleted = () => this.setState({ isDeleted: true });

  render() {
    if (this.state.isDeleted) {
      return null;
    }

    const { input, ...rest } = this.props;

    return <View input={input} handleDeleted={this.handleDeleted} />;
  }
}

TemplateInputFormQueryContainer.propTypes = {
  input: PropTypes.object.isRequired
};

export { TemplateInputFormQueryContainer };

export default TemplateInputFormQueryContainer;
