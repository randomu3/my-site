import React from "react";
import { useProfileStyles } from "./UserProfileStyles";
import PageWrapper from "../PageWrapper/PageWrapper";
import AvatarSection from "./components/AvatarSection/Avatar";
import ButtonSection from "./components/ButtonSection/ButtonSection";
import ProfileForm from './components/ProfileForm/ProfileForm';

const UserProfile = () => {
  const classes = useProfileStyles();

  return (
    <PageWrapper title="Профиль">
      <div className={classes.profileContainer}>
        <AvatarSection classes={classes} />
        <ProfileForm classes={classes} />
        <ButtonSection classes={classes} />
      </div>
    </PageWrapper>
  );
};

export default UserProfile;
