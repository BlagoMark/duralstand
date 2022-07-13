import React from "react";
import SearchUsersContainer from "./SearchUsers/SearchUsersContainer";
import classes from "./Users.module.css";
import userImage from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import Subscribe from "./Subscribe/Subscribe";

const Users = (props) => {
  return (
    <div className={classes.users}>
      {props.isFetching ? <Preloader /> : null}
      <h2>Найти друзей</h2>
      <SearchUsersContainer />
      <div className={classes.wrapper}>
        {props.users.map((u) => (
          <div key={u.id} className={classes.item}>
            <NavLink
              to={`/profile/${u.id}`}
              state={{ followed: u.followed }}
              className={classes.avatar}
            >
              <img
                src={u.photos.small !== null ? u.photos.large : userImage}
                alt=""
              />
            </NavLink>
            <NavLink to={`/profile/${u.id}`} className={classes.name}>
              {u.name}
            </NavLink>
            <div className={classes.city}>{u.city}</div>
            <div>
              <Subscribe
                id={u.id}
                followed={u.followed}
                followTC={props.followTC}
                unfollowTC={props.unfollowTC}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={classes.showMore}>
        {props.users.length > 0 ? (
          props.isFetcing ? (
            <button disabled className={`button`}>
              Показать больше
            </button>
          ) : (
            <button
              className={`button`}
              onClick={() => {
                props.onShowMoreUsers(props.page);
              }}
            >
              Показать больше
            </button>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Users;
