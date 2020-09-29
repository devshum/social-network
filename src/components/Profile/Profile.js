import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = props => {
  return(
    <main>

      <ProfileInfo />

      <MyPosts posts = {props.profilePage.postsData} 
               addPost = {props.addPost} 
               updateNewPostText = {props.updateNewPostText}
               newPostText = {props.profilePage.newPostText} />

    </main>
  )
};

export default Profile;