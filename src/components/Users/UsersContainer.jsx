import React from "react";
import Users from "./Users";
import preloader from "../common/preloader/preloader";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  onShowMoreUsers,
  toggleIsFollowInProgress,
  getUsers,
  onShowMoreBtn,
  followTC,
  unfollowTC,
} from "../../redux/usersReducer";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import {
  getPageSize,
  getUsersCount,
  getIsFetching,
  getFollowInProgress,
  getUsersMassive,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.usersCount);
  }
  onShowMoreUsers = () => {
    this.props.onShowMoreBtn(this.props.usersCount);
  };
  render() {
    return (
      <Users
        preloader={preloader}
        users={this.props.users}
        page={this.props.page}
        onShowMoreUsers={this.onShowMoreUsers}
        unfollowTC={this.props.unfollowTC}
        followTC={this.props.followTC}
        isFetching={this.props.isFetching}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersMassive(state),
    page: getPageSize(state),
    usersCount: getUsersCount(state),
    isFetching: getIsFetching(state),
    followAPI: usersAPI.follow,
    unfollowAPI: usersAPI.unfollow,
    followInProgress: getFollowInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    onShowMoreUsers,
    toggleIsFollowInProgress,
    getUsers,
    onShowMoreBtn,
    followTC,
    unfollowTC,
  })
)(UsersContainer);
