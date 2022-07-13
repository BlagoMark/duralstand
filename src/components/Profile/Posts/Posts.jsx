import React from "react";
import classes from "./Posts.module.css";
import WritePostContainer from "./WritePost/WritePostContainer";

const Posts = (props) => {
  return (
    <div className={classes.posts}>
      <WritePostContainer isOwner={props.isOwner} />
      <div className={classes.postsItems}>{props.postsElements}</div>
    </div>
  );
};

export default Posts;
