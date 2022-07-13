import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";

const Friends = (props) => {
  let friendsElements = props.friendsElements;
  return (
    <div className={classes.friends}>
      <h3>Друзья</h3>
      <div className={classes.friendsWrapper}>{friendsElements}</div>
      <NavLink to="/friends" className={classes.allFriends}>
        Показать всех
      </NavLink>
    </div>
  );
};

export default Friends;
