import classes from "./Dialogs.module.css";
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsElements;
  let messagesElements = props.messagesElements;
  if (!props.isAuth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.chat}>
        <div className={classes.messagesWrapper}>{messagesElements}</div>
      </div>
      <WriteMessageContainer />
    </div>
  );
};

export default Dialogs;
