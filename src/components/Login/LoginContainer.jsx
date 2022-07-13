import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginTC } from "../../redux/authReducer";
import Login from "./Login";
import { reset } from "redux-form";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, { loginTC, reset }))(
  LoginContainer
);
