import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, logoutTC } from "../../redux/authReducer";
import { compose } from "redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(connect(mapStateToProps, { setAuthUserData, logoutTC }))(
  HeaderContainer
);
