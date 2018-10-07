import React from "react";
import PropTypes from "prop-types";
import Option from "./Option";
import { OPTION_DEFAULT_NAME_PREFIX } from "./fields";

const defaultOptions = [{ label: "", value: "", isDefault: false }];

class OptionAdder extends React.Component {
  constructor(props) {
		super(props);

    const options = props.options.length > 0 
      ? props.options
      : defaultOptions;

    this.state = {
      options
    };
  }

  getHandleRemove = key => () => {
    const options = [...this.state.options];

    options.splice(key, 1);
    this.setState({ options });
  };

  handleAdd = () => {
    const options = [...this.state.options, { lable: "", value: "" }];

    this.setState({ options });
  };

  /**
   * Unchecked all unrelated checkbox
   */
  getHandleDefaultChange = id => ev => {
    const uncheckedFields = {};

    this.state.options.forEach((option, index) => {
      if (id !== index) {
        uncheckedFields[OPTION_DEFAULT_NAME_PREFIX + index] = false;
      }
    });

    this.props.form.setFieldsValue(uncheckedFields);
  };

  getOptionMaker = form => (option, index) => {
    const { length } = this.state.options;
		const { value, label, isDefault } = option;
    const isLast = index === length - 1;
    const isNotAlone = length > 1;

    return (
      <Option
        key={index}
        id={index}
        value={value}
        label={label}
        isDefault={isDefault}
        isAddable={isLast}
        isRemovable={isNotAlone}
        handleDefaultChange={this.getHandleDefaultChange(index)}
        handleAdd={this.handleAdd}
        handleRemove={this.getHandleRemove(index)}
        form={form}
      />
    );
  };

  render() {
    const { form } = this.props;
    const optionMaker = this.getOptionMaker(form);

    return <div>{this.state.options.map(optionMaker)}</div>;
  }
}

OptionAdder.defaultProps = {
  options: defaultOptions
};

OptionAdder.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  form: PropTypes.object.isRequired
};

export { OptionAdder };

export default OptionAdder;
