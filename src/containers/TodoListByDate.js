import { connect } from "react-redux";
import TodoListByDate from "../components/TodoListByDate";

const todoListFilter = (todos, showState) => {
  switch (showState) {
    case "Done":
      return todos.filter((item) => item.finish);
    case "Undone":
      return todos.filter((item) => !item.finish);
    case "All":
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => ({
  //store state 分不清了快 晕
  todoListFilter: todoListFilter(ownProps.listByDate, state.showState),
});

export default connect(mapStateToProps)(TodoListByDate);
