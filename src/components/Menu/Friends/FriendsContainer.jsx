import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Friend from "./Friend/Friend";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  let friendsElements = state.sidebar.friends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        avatarImage={friend.avatarImage}
        color={friend.color}
        name={friend.name}
        id={friend.id}
      />
    );
  });
  return { friendsElements: friendsElements };
};

export default compose(connect(mapStateToProps, {}))(Friends);
