import React from "react";
import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.item}>
      <a href={`${props.path}`} className={classes.avatar}>
        <img src={props.avatar} alt="" />
      </a>
      <a href={`${props.path}`} className={classes.name}>
        {props.name}
      </a>
      <div className={classes.city}>{props.city}</div>
      <div className={classes.follow}>
        {props.followed === true ? (
          <button
            onClick={() => {
              props.unfollow(props.id);
            }}
            className={`${classes.btn} ${classes.follow} button`}
          >
            Подписаться
          </button>
        ) : (
          <button
            onClick={() => {
              props.follow(props.id);
            }}
            className={`${classes.btn} ${classes.unfollow} button`}
          >
            Вы подписаны
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
