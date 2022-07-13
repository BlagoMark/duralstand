import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from "../../../../redux/profileReducer";
import WritePost from "./WritePost";
import { reset } from "redux-form";

let mapStateToProps = (state) => {
  return { newPostText: state.profilePage.newPostText };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    reset,
  })
)(WritePost);
