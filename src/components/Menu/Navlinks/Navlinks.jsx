import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navlinks.module.css";

const Navlinks = (props) => {
  return (
    <nav>
      <ul>
        <li className={classes.item}>
          <NavLink
            to={props.isAuth ? "/profile/" : "/login/"}
            state={{ followed: true }}
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            👤 Моя страница
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            💬 Сообщения
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            📰 Новости
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/music"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            ♬ Музыка
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/users"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            🔍 Найти друзей
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
