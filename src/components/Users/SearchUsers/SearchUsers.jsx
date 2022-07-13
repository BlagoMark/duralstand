import React from "react";
import classes from "./SearchUsers.module.css";

const SearchUsers = (props) => {
  let searchInput = React.createRef();
  let onSearchUsersChange = () => {
    let text = searchInput.current.value;
    props.onSearchUsersChange(text);
  };
  return (
    <div className={classes.search}>
      <input
        value={props.searchText}
        onChange={onSearchUsersChange}
        ref={searchInput}
        type="text"
        placeholder="Начните вводить имя пользователя"
      />
      <button className={classes.searchBtn}>
        <img
          src="https://www.pngmart.com/files/8/Magnifying-Glass-PNG-No-Background.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default SearchUsers;
