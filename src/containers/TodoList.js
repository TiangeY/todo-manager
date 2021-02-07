import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const todoListFilter = (list, showState) => {
  switch (showState) {
    case "Done":
      return list.filter((itemList) => itemList.todoDone);
    case "Undone":
      return list.filter((itemList) => itemList.todoUndone);
    case "All":
    default:
      return list;
  }
};

const mapStateToProps = (state) => ({
  todoListFilter: todoListFilter(state.list, state.showState),
});

export default connect(mapStateToProps)(TodoList);
