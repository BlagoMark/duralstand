import React from "react";
import FriendsContainer from "./Friends/FriendsContainer";
import classes from "./Menu.module.css";
import Navlinks from "./Navlinks/Navlinks";

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      <Navlinks isAuth={props.isAuth} />
      <FriendsContainer />
    </div>
  );
};

export default Menu;
