import React from "react";
import PropTypes from "prop-types";
import TodoListByDate from "../containers/TodoListByDate";

const TodoList = ({ todoListFilter }) => {
  return (
    <div className="todo-wrap">
      {todoListFilter.length > 0 ? todoListFilter.map((itemList) => (
        <div className="todo-date" key={itemList.addDate}>
          <h4 className="date-title">{itemList.addDate} Todos</h4>
          <TodoListByDate listByDate={itemList.listByDate} />
        </div>
      )) : <h4 className="todo-none">There's nothing here, yet!</h4>}
    </div>
  );
};

TodoList.propTypes = {
  todoListFilter: PropTypes.arrayOf(
    PropTypes.shape({
      addDate: PropTypes.string.isRequired,
      todoDone: PropTypes.number.isRequired,
      todoUndone: PropTypes.number.isRequired,
      listByDate: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          finish: PropTypes.bool.isRequired,
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
          todo: PropTypes.string.isRequired,
        })
      ),
    }).isRequired
  ).isRequired,
};

export default TodoList;
