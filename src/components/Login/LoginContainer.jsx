import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reset } from "redux-form";
import { loginTC } from "../../redux/authReducer";
import Login from "./Login";

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
