import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';
import { addPostActionCreater, updateNewPostActionCreator } from '../../../redux/profile-reducer';

const MyPosts = props => {
  

  const postElements = props.posts.map(postsObj => <Post message={postsObj.post} likeCount={postsObj.likeCount} key={postsObj.id} />);

  const textAreaLink = React.createRef();

  const addPost = () => {
    props.dispatch( addPostActionCreater() );
  };

  let onPostChange = () => {
    const text = textAreaLink.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>

      <div className={classes.addPost}>
          <div><textarea ref={textAreaLink} onChange={onPostChange} value={props.newPostText} /></div>
          <div>
            <button onClick={addPost}>Add a post</button>
          </div>
      </div>

      <div>

        { postElements }

      </div>
    </div>
  );
};

export default MyPosts;