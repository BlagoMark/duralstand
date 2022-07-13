import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  const avatarStyle = {
    background: `${props.color}`,
  };
  const nameStyle = {
    color: `${props.color}`,
  };
  const path = `/dialogs/${props.name}+${props.id}`;
  return (
    <NavLink to={path} className={classes.item}>
      <div style={avatarStyle} className={classes.avatar}></div>
      <div style={nameStyle} className={classes.name}>
        {props.name}
      </div>
    </NavLink>
  );
};

export default DialogsItem;
