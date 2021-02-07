import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({
  category,
  priority,
  time,
  id,
  todo,
  date,
  finish,
  handleTodoItemToggle,
  handleTodoItemEdit,
  handleDeleteTodoItem,
}) => {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <div className="todo-category">
          <i className={category.img}></i>
        </div>
        <div className="todo-priority-time">
          <div className="todo-priority">
            <img src={priority.img} alt="img"></img>
          </div>
          <div className="todo-time">{time.value}</div>
        </div>
        <div className="todo-text">{todo}</div>
      </div>
      <div>
        {!finish && (
          <button
            className="todo-edit"
            onClick={() => {
              handleTodoItemEdit(id, date);
            }}
          >
            <i className="fas fa-pen"></i>
          </button>
        )}
        <button
          className={finish ? "todo-undone" : "todo-done"}
          onClick={() => {
            handleTodoItemToggle(id, date);
          }}
        >
          {finish ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-check"></i>
          )}
        </button>
        {/* 传参数用 arrow func */}
        <button
          className="todo-delete"
          onClick={() => {
            handleDeleteTodoItem(id, date, finish);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  handleTodoItemToggle: PropTypes.func.isRequired,
  handleTodoItemEdit: PropTypes.func.isRequired,
  handleDeleteTodoItem: PropTypes.func.isRequired,
};

export default TodoListItem;
