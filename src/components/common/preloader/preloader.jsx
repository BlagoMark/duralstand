import React from "react";
import classes from "./preloader.module.css";
import preloaderSrc from "../../../assets/img/loader.svg";

let Preloader = () => {
  return (
    <div className={classes.preloaderWrapper}>
      <img className={classes.preloader} src={preloaderSrc} alt="" />
    </div>
  );
};

export default Preloader;
