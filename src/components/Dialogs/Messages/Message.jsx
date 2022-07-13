import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div style={props.style} className={classes.message}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.time}>{props.time}</div>
    </div>
  );
};

export default Message;
