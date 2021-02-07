import React from "react";
import ShowStateLink from "../containers/ShowStateLink";

const TodoListShowState = () => {
  return (
    <div className="todo-state">
      <ShowStateLink stateValue={"All"}>All</ShowStateLink>
      <ShowStateLink stateValue={"Done"}>Done</ShowStateLink>
      <ShowStateLink stateValue={"Undone"}>
        Undone
      </ShowStateLink>
    </div>
  );
};

export default TodoListShowState;
