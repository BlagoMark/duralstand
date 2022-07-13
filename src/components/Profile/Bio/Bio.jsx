import React from "react";
import classes from "./Bio.module.css";
import avatar from "../../../assets/img/user.png";
import StatusWithHooks from "./Status/StatusWithHooks";
import { connect } from "react-redux";
import { compose } from "redux";
import Subscribe from "../../Users/Subscribe/Subscribe";
import { followTC, unfollowTC } from "../../../redux/usersReducer";

const Bio = (props) => {
  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={classes.bio}>
      <div className={classes.avatar}>
        <img
          src={props.bio.photos.large ? props.bio.photos.large : avatar}
          alt="bio-img"
        />
        {props.isOwner ? (
          <>
            <div className={classes.selectPhoto}>
              <label>
                <div>📷</div>
                <input type={"file"} onChange={onAvatarSelected}></input>
              </label>
            </div>
          </>
        ) : null}
      </div>
      {props.error ? <div className={classes.error}>{props.error}</div> : null}
      <div className={classes.bio_content}>
        <h2 className={classes.name}>{props.bio.fullName}</h2>
        <br />
        <StatusWithHooks
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <p>
          День рождения: {props.bio.birthday ? props.bio.birthday : "не указан"}
        </p>
        <p>Город: {props.bio.city ? props.bio.city : "не указан"}</p>
      </div>
      <Subscribe
        isOwner={props.isOwner}
        id={props.bio.userId}
        followed={props.followed.followed}
        followTC={props.followTC}
        unfollowTC={props.unfollowTC}
      />
    </div>
  );
};

class BioContainer extends React.Component {
  render() {
    return <Bio {...this.props} />;
  }
}

export default compose(
  connect(null, {
    followTC,
    unfollowTC,
  })
)(BioContainer);
