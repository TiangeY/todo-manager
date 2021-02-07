import { connect } from "react-redux";
import TodoOptions from "../components/TodoOptions";
import {
  inputOnclickAction,
  optionOnclickAction,
} from "../actions/actionCreators";

const mapStateToProps = (state) => ({
  showOption: state.showOption,
  category: state.category,
  priority: state.priority,
  time: state.time,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputOnclick: (inputType) => {
    const action = inputOnclickAction(inputType);
    dispatch(action);
  },
  handleOptionOnclick: (item) => {
    const action = optionOnclickAction(item);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoOptions);
