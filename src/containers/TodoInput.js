import { connect } from "react-redux"; //kekex
import {
  inputValueAction,
  addTodoItemAction,
  clearAllAction,
} from "../actions/actionCreators";
import TodoInput from "../components/TodoInput";

const mapStateToProps = (state) => ({
  //store state 分不清了快 晕
  inputValue: state.inputValue,
  editItem: state.editItem,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValue: (e) => {
    const action = inputValueAction(e.target.value); //const action = forget target
    dispatch(action);
  },
  handleAddTodoItem: () => {
    // 不需要参数inputValue, reducer.js中可从state获取 一定要有（）需要执行 返回 object
    const action = addTodoItemAction();
    dispatch(action);
  },
  handleClearAll: () => {
    const action = clearAllAction();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput); //keke
