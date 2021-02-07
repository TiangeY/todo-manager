import { connect } from "react-redux";
import { todoFilterAction } from "../actions/actionCreators";
import ShowStateLink from "../components/ShowStateLink";

const mapStateToProps = (state, ownProps) => ({
  active: state.showState === ownProps.stateValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleTodosShowState: () => {
    const action = todoFilterAction(ownProps.stateValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowStateLink);
