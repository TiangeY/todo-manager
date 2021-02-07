import React from "react";
import PropTypes from "prop-types";
// 可能connect后 同名引入哪个都一样"../components/TodoListItem";
import TodoListItem from "../containers/TodoListItem";

const TodoListByDate = ({ todoListFilter }) => {
  return (
    // JSX原来不能整段func哇 - -!
    <ul className="todo-ul">
        {todoListFilter.map((item) => {
          //{...item} 打散
          return <TodoListItem key={item.id} {...item} />;
        })}
    </ul>
  );
};

TodoListByDate.propTypes = {
  todoListFilter: PropTypes.arrayOf(
    // ( 。。。
    PropTypes.shape({
      // ( { 。。。
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
    }).isRequired
  ).isRequired,
};

export default TodoListByDate;
