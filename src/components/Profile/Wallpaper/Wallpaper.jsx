import React from "react";
import classes from "./Wallpaper.module.css";

const Wallpaper = (props) => {
  return (
    <img className={classes.main_img} src={props.wallpaper} alt="mainImg" />
  );
};

export default Wallpaper;
