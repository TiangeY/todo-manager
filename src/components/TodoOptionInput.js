import React from "react";
import PropTypes from "prop-types";

const TodoOptionInput = ({ showOption, option, handleInputOnclick }) => {
  return (
    <div className={showOption === option.title.toLowerCase() ? `option-item option-item-${showOption}` : "option-item"}>
      <div className="options-border">
        <div
          className="options-wrap"
          onClick={() => {
            handleInputOnclick(option.title);
          }}
        >
          <div className="options-title">{option.title}</div>
          <input
            className="options-input"
            type="text"
            value={option.value}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

TodoOptionInput.propTypes = {
  option: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  handleInputOnclick: PropTypes.func.isRequired,
};

export default TodoOptionInput;
