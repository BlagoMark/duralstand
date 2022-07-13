import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../Hoc/AuthRedirect";
import Dialogs from "./Dialogs";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";

let mapStateToProps = (state) => {
  let dialogsElements = state.dialogsPage.dialogs.map((dialog) => {
    return (
      <DialogsItem
        color={dialog.color}
        key={dialog.id}
        name={dialog.name}
        id={dialog.id}
      />
    );
  });

  let messagesElements = state.dialogsPage.messages.map((message) => {
    return (
      <Message
        key={message.id}
        text={message.text}
        name={message.name}
        style={message.style}
      />
    );
  });

  return {
    dialogsElements,
    messagesElements,
  };
};

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Dialogs);
