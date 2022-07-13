import { connect } from "react-redux";
import { compose } from "redux";
import { onSearchUsersChangeAC } from "../../../redux/usersReducer";
import SearchUsers from "./SearchUsers";

let mapStateToProps = (state) => {
  return {
    searchText: state.usersPage.searchText,
  };
};

export default compose(
  connect(mapStateToProps, {
    onSearchUsersChange: onSearchUsersChangeAC,
  })
)(SearchUsers);
