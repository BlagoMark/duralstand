import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <a className={classes.logo} href="/profile">
        DuralStand
      </a>
      <div className={classes.rightPanel}>
        <NavLink to={"/settings"} className={classes.settings}>
          ⚙
        </NavLink>
        <div className={classes.login}>
          {props.isAuth ? (
            <div>
              {props.login}{" "}
              <button className="button " onClick={props.logoutTC}>
                Выйти
              </button>
            </div>
          ) : (
            <NavLink className={"button " + classes.navlink} to={"/login"}>
              Войти
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
