import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Menu from "./Menu";

class MenuContainer extends React.Component {
  render() {
    return <Menu {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default compose(connect(mapStateToProps, null))(MenuContainer);
