import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../util/validator/validator";
import classes from "./WriteMessage.module.css";

const maxLength10 = maxLengthCreator(10);

const WriteMessage = (props) => {
  let addMessage = (values) => {
    props.addMessage(values.WriteMessage);
    props.reset("WriteMessage");
  };

  const WriteMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className={classes.writeMessage}>
        <Field
          component={Textarea}
          validate={[required, maxLength10]}
          name="WriteMessage"
          rows={1}
          className={classes.messageInput}
          placeholder="Введите сообщение"
        />
        <button className={`${classes.send} button`}>Отправить</button>
      </form>
    );
  };
  const AddMessageReduxForm = reduxForm({ form: "WriteMessage" })(
    WriteMessageForm
  );
  return <AddMessageReduxForm onSubmit={addMessage} />;
};

export default WriteMessage;
