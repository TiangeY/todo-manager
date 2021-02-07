import React from "react";
import PropTypes from "prop-types";

const TodoInput = ({ // forget the {}
  inputValue,
  editItem,
  handleInputValue,
  handleAddTodoItem,
  handleClearAll, //忘
}) => {
  return (
    <div className="input">
      <form
        onSubmit={(e) => {
          //在这里阻止刷新哇。。。。。
          e.preventDefault();
          handleAddTodoItem();
        }}
      >
        <div className="input-wrap">
          <div className="input-add">
            <input
              className="todo-input"
              type="text"
              placeholder="Add Todo"
              value={inputValue}
              onChange={handleInputValue} //props. //不用在这传 e 的哇 传好像也成
            />
            <button
              className="todo-add" type="submit">{editItem.id ? "Update" : "Add"}</button>
          </div>
          <div className="input-clear">
            <button onClick={handleClearAll}>Clear All</button>
          </div>
        </div>
      </form>
    </div>
  );
};

TodoInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  editItem: PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    date: PropTypes.string,
    finish: PropTypes.bool,
  }),
  handleInputValue: PropTypes.func.isRequired,
  handleAddTodoItem: PropTypes.func.isRequired,
  handleClearAll: PropTypes.func.isRequired,
};

export default TodoInput;
