import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../Hoc/withRouter";
import { compose } from "redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profileReducer";
import {
  getAuthorizedUserId,
  getIsAuth,
  getProfile,
  getStatus,
  getWallpaper,
} from "../../redux/profileSelectors";
import Preloader from "../common/preloader/preloader";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params;
    if (!userId["*"]) {
      userId["*"] = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    let userId = this.props.router.params;
    let prevUserId = prevProps.router.params;
    if (userId["*"] !== prevUserId["*"]) {
      this.refreshProfile();
    }
  }
  getIsOwner() {
    let userId = this.props.authorizedUserId;
    return (
      this.props.router.location.pathname === "/profile/" ||
      this.props.router.location.pathname === `/profile/${userId}`
    );
  }
  render() {
    return <Profile {...this.props} isOwner={this.getIsOwner()} />;
  }
}

let mapStateToProps = (state) => ({
  wallpaper: getWallpaper(state),
  profile: getProfile(state),
  preloader: { Preloader },
  status: getStatus(state),
  authorizedUserId: getAuthorizedUserId(state),
  isAuth: getIsAuth(state),
  error: state.profilePage.error,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter
)(ProfileContainer);
