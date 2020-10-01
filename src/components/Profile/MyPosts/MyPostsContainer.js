import React from 'react';
import { updateNewPostActionCreator, addPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostContainer = props => {
    const state = props.store.getState();

    const onAddPost = () => props.store.dispatch( addPostActionCreater() ); 

    const onPostChange = text => props.store.dispatch(updateNewPostActionCreator(text)); 

    return( <MyPosts addPost = {onAddPost} 
                     updateNewPostText = {onPostChange} 
                     posts={state.profilePage.postsData} 
                     newPostText={state.profilePage.newPostText} /> );
};

export default MyPostContainer;