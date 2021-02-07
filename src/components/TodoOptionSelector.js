import React from "react";
import PropTypes from "prop-types";

const TodoOptionSelector = ({ options, handleOptionOnclick }) => {
  return (
    <div>
      <ul className="selector-ul">
        {options.map((item) => {
          return (
            <li
              className="selector-list"
              key={item.value}
              onClick={() => handleOptionOnclick(item)}
            >
              <span>{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// mapStateToProps/mapDispatchToProps 中参数 ownProps.XXX 不能直接赋值给属性 只能利用

TodoOptionSelector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleOptionOnclick: PropTypes.func.isRequired,
};

export default TodoOptionSelector;
