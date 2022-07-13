import { connect } from "react-redux";
import { compose } from "redux";
import { addMessage } from "../../../redux/dialogsReducer";
import WriteMessage from "./WriteMessage";
import { reset } from "redux-form";

const mapStateToProps = (state) => ({});

export default compose(
  connect(mapStateToProps, {
    addMessage,
    reset,
  })
)(WriteMessage);
