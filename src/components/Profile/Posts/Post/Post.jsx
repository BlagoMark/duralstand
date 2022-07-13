import React from "react";
import classes from "./Post.module.css";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.item__img}>
        <img src={props.avatar} alt="" />
      </div>
      <div className={classes.item__text}>
        {props.message}
        <NavLink to="#markblagov" className={classes.name}>
          {props.name}
        </NavLink>
      </div>
      <div
        className={classes.like}
        onClick={() => {
          props.likes++;
        }}
      >
        <span>♥</span> {props.likes}
      </div>
    </div>
  );
};

export default Post;
