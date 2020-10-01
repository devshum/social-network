import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = props => {
  return(
    <main>

      <ProfileInfo />

      <MyPostsContainer store = {props.store} />

    </main>
  )
};

export default Profile;