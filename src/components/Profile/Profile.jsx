import React from "react";
import BioContainer from "./Bio/Bio";
import PostsContainer from "./Posts/PostsContainer";
import Wallpaper from "./Wallpaper/Wallpaper";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      {!props.profile ? null : ( // <Preloader />
        <>
          <Wallpaper wallpaper={props.wallpaper} />
          <BioContainer
            followed={props.router.location.state || true}
            user={props.user}
            error={props.error}
            isOwner={props.isOwner}
            bio={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
          />
          <PostsContainer isOwner={props.isOwner} />
        </>
      )}
    </div>
  );
};

export default Profile;
