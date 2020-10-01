import React from 'react';
import { updateNewPostActionCreator, addPostActionCreater } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostContainer = () => ( 
    <StoreContext.Consumer> 
        { store => {
            const state = store.getState();

            const onAddPost = () => store.dispatch( addPostActionCreater() ); 

            const onPostChange = text => store.dispatch(updateNewPostActionCreator(text));

            return( <MyPosts addPost = {onAddPost} 
                updateNewPostText = {onPostChange} 
                posts={state.profilePage.postsData} 
                newPostText={state.profilePage.newPostText} /> 
            );
        }
    };
    
    </StoreContext.Consumer> 
);

export default MyPostContainer;