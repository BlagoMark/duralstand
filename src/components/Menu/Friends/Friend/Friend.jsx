import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friend.module.css";

const Friend = (props) => {
  const avatarStyle = {
    background: `${props.color}`,
  };
  return (
    <NavLink to={`${props.name}+${props.id}`} className={classes.friend}>
      <div style={avatarStyle} className={classes.friendAvatar}>
        <img
          src={props.avatarImage}
          alt="https://www.freeiconspng.com/thumbs/person-icon/person-icon-user-person-man-icon-4.png"
        />
      </div>
      <div className={classes.friendName}>{props.name}</div>
    </NavLink>
  );
};

export default Friend;
