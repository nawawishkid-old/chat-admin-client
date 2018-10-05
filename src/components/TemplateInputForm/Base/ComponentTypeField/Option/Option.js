import React from "react";
import PropTypes from "prop-types";
import { Icon, Checkbox } from "antd";
import {
  OptionLabelField,
  OptionValueField,
  OptionDefaultField
} from "./fields";

const Option = props => {
  const {
    label,
    value,
    isAddable,
    isRemovable,
    handleAdd,
    handleRemove,
    handleDefaultChange,
    isDefault,
    id,
    form
  } = props;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <OptionLabelField
          form={form}
          id={id}
          defaultValue={label}
          value={label}
        />
        <OptionValueField
          form={form}
          id={id}
          defaultValue={value}
          value={value}
        />
        <OptionDefaultField
          form={form}
          id={id}
          defaultChecked={isDefault}
          onChange={handleDefaultChange}
        />
      </div>
      {isRemovable ? <Icon type="minus" onClick={handleRemove} /> : null}
      {isAddable ? <Icon type="plus" onClick={handleAdd} /> : null}
    </div>
  );
};

Option.defaultProps = {
  value: "",
  label: "",
  isRemovable: true
};

Option.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  form: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRemovable: PropTypes.bool,
  isAddable: PropTypes.bool,
  isDefault: PropTypes.bool,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export { Option };

export default Option;
