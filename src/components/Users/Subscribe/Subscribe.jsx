import React from "react";
import classes from "./User.module.css";

const Subscribe = (props) => {
  const isClicked = () => {
    debugger;
    if (props.followed) {
      props.followed = false;
      debugger;
    }
  };
  if (!props.isOwner) {
    if (props.followed) {
      return (
        <button
          onClick={() => {
            props.followTC(props.id);
            isClicked();
          }}
          className={`${classes.unfollow} button`}
        >
          Вы подписаны
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            props.unfollowTC(props.id);
          }}
          className={`button`}
        >
          Подписаться
        </button>
      );
    }
  }
};

export default Subscribe;
