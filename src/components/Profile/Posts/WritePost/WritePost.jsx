import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../util/validator/validator";
import classes from "./WritePost.module.css";

const maxLength300 = maxLengthCreator(300);

const WritePost = (props) => {
  let addPost = (values) => {
    props.addPost(values.WritePost);
    props.reset("WritePost");
  };
  return (
    <>
      {props.isOwner ? (
        <AddPostFormRedux onSubmit={addPost} />
      ) : (
        <span className={classes.postsTitle}>Публикации</span>
      )}
    </>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.write}>
      <Field
        validate={[required, maxLength300]}
        component={Textarea}
        name="WritePost"
        required
        placeholder="Расскажите, что нового :)"
        className={classes.area}
      />
      <button className={`${classes.btn} ${"button"}`}>Отправить</button>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "WritePost" })(AddPostForm);

export default WritePost;
