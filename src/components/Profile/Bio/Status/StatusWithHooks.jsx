import React, { useEffect, useState } from "react";
import classes from "./Status.module.css";

const StatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={classes.editModeFalse}>
      {!editMode ? (
        <div className={classes.status}>
          <span>
            {props.status
              ? props.status
              : "Привет! Я новый пользователь DuralStand 👋"}
          </span>
          {props.isOwner ? (
            <button
              className={"button " + classes.button}
              onClick={activateEditMode}
            >
              ✎
            </button>
          ) : null}
        </div>
      ) : (
        <div className={classes.editModeTrue}>
          <input
            onChange={onStatusChange}
            type="text"
            value={status}
            autoFocus={true}
          />
          <button
            className={"button " + classes.button}
            onClick={deactivateEditMode}
          >
            ✔
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusWithHooks;
