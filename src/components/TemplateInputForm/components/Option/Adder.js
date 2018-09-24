import React from "react";
import PropTypes from "prop-types";
import Option from "./Option";

class OptionAdder extends React.Component {
  constructor(props) {
    super(props);

    this.options = props.options;
  }

  state = {
    amount: 1,
    defaultOptionId: null
  };

  getHandleRemove = key => () => {
    this.options.splice(key, 1);
    this.setState({ amount: this.options.length });
  };

  handleAdd = () => {
    this.options.push({ lable: "", value: "" });
    this.setState({ amount: this.options.length });
  };

  getHandleDefaultChange = id => ev => this.setState({ defaultOptionId: id });

  getOptionMaker = form => (option, index) => {
    const { length } = this.options;
    const isLast = index === length - 1;
    const isNotAlone = length > 1;
    const isDefault = this.state.defaultOptionId === index;
		const isDefaultable = this.state.defaultOptionId === null;

    return (
      <Option
        key={index}
        id={index}
        value={option.value}
        label={option.label}
        isDefault={isDefault}
        isDefaultable={isDefaultable}
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

    return <div>{this.options.map(optionMaker)}</div>;
  }
}

OptionAdder.defaultProps = {
  options: [{ label: "", value: "", isDefault: false }]
};

OptionAdder.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  form: PropTypes.object.isRequired
};

export { OptionAdder };

export default OptionAdder;
