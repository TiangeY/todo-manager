import React from "react";
import TodoOptions from "./containers/TodoOptions";
import TodoInput from "./containers/TodoInput";
import TodoList from "./containers/TodoList";
import TodoListShowState from "./components/TodoListShowState";
import "./App.css";

const App = () => {
  return (
    //return 和 ( 必须同行吧
    <div className="container">
      <TodoOptions />
      <TodoInput />
      <div className="todo-list">
        <TodoList />
        <TodoListShowState />
      </div>
    </div>
  );
};

export default App; //keke
