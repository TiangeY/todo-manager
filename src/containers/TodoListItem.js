import { connect } from "react-redux";
import {
  todoItemToggleAction,
  todoItemEditAction,
  deleteTodoItemAction,
} from "../actions/actionCreators";
import TodoListItem from "../components/TodoListItem";

const mapDispatchToProps = (dispatch) => {
  return {
    handleTodoItemToggle: (id, date) => {
      const action = todoItemToggleAction(id, date);
      dispatch(action);
    },
    handleTodoItemEdit: (id, date) => {
      const action = todoItemEditAction(id, date);
      dispatch(action);
    },
    handleDeleteTodoItem: (id, date, finish) => {
      const action = deleteTodoItemAction(id, date, finish);
      dispatch(action);
    },
  };
};

//需要加 null 只有mapPropsToProps不用
export default connect(null, mapDispatchToProps)(TodoListItem);
