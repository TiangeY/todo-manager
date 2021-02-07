import React from "react";
import TodoOptionSelector from "./TodoOptionSelector";
import TodoOptionInput from "./TodoOptionInput";
import PropTypes from "prop-types";
import Priority4 from "../img/priority4.svg";
import Priority3 from "../img/priority3.svg";
import Priority2 from "../img/priority2.svg";
import Priority1 from "../img/priority1.svg";
import Priority0 from "../img/priority0.svg";

const optionCategory = [
  { title: "Category", value: "Work", img: "fas fa-briefcase" },
  { title: "Category", value: "Study", img: "fas fa-user-graduate" },
  { title: "Category", value: "Health", img: "fas fa-heartbeat" },
  { title: "Category", value: "Entertainment", img: "fas fa-gamepad" },
  { title: "Category", value: "Life", img: "fas fa-file-invoice-dollar" },
  { title: "Category", value: "Other", img: "fas fa-feather-alt" },
];
const optionPriority = [
  { title: "Priority", value: "4", img: Priority4 },
  { title: "Priority", value: "3", img: Priority3 },
  { title: "Priority", value: "2", img: Priority2 },
  { title: "Priority", value: "1", img: Priority1 },
  { title: "Priority", value: "0", img: Priority0 },
];
const optionTime = [
  { title: "Time", value: "< 1 hour", img: "fas fa-briefcase" },
  { title: "Time", value: "1 ~ 2 hour", img: "fas fa-user-graduate" },
  { title: "Time", value: "2 ~ 3 hour", img: "fas fa-heartbeat" },
  { title: "Time", value: "3 ~ 4 hour", img: "fas fa-gamepad" },
  { title: "Time", value: "> 4 hour", img: "fas fa-file-invoice-dollar" },
];

const TodoOptions = ({
  showOption,
  category,
  priority,
  time,
  handleInputOnclick,
  handleOptionOnclick,
}) => {
  return (
    <div className="options-container">
      <div className="options">
        <TodoOptionInput
          showOption={showOption}
          option={category}
          handleInputOnclick={handleInputOnclick}
        />
        <TodoOptionInput
          showOption={showOption}
          option={priority}
          handleInputOnclick={handleInputOnclick}
        />
        <TodoOptionInput
          showOption={showOption}
          option={time}
          handleInputOnclick={handleInputOnclick}
        />
      </div>

      <div
        className={
          showOption ? `options-selector options-selector-${showOption}` : ""
        }
      >
        {showOption === "category" && (
          <TodoOptionSelector
            options={optionCategory}
            handleOptionOnclick={handleOptionOnclick}
          />
        )}
        {showOption === "priority" && (
          <TodoOptionSelector
            options={optionPriority}
            handleOptionOnclick={handleOptionOnclick}
          />
        )}
        {showOption === "time" && (
          <TodoOptionSelector
            options={optionTime}
            handleOptionOnclick={handleOptionOnclick}
          />
        )}
      </div>
    </div>
  );
};

TodoOptions.propTypes = {
  showOption: PropTypes.string.isRequired,
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  priority: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  time: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  handleInputOnclick: PropTypes.func.isRequired,
  handleOptionOnclick: PropTypes.func.isRequired,
};

export default TodoOptions;
