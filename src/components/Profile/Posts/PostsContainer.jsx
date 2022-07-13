import React from "react";
import { connect } from "react-redux";
import Post from "./Post/Post";
import Posts from "./Posts";
import avatar from "../../../assets/img/user.png";
import { compose } from "redux";

let mapStateToProps = (state) => {
  let postsElements = state.profilePage.posts.map((post) => {
    return (
      <Post
        key={post.id}
        name={state.profilePage.profile.fullName}
        avatar={
          state.profilePage.profile.photos.small
            ? state.profilePage.profile.photos.small
            : avatar
        }
        message={post.message}
        likes={post.likes}
      />
    );
  });
  return { postsElements: postsElements };
};

export default compose(connect(mapStateToProps, {}))(Posts);
