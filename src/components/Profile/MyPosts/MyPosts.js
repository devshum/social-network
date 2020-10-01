import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';

const MyPosts = props => {

  const postElements = props.posts.map(postsObj => <Post message={postsObj.post} likeCount={postsObj.likeCount} key={postsObj.id} />);

  const addPost = () => {
    props.addPost();
  };

  let onPostChange = e => {
    const text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>

      <div className={classes.addPost}>
          <div><textarea onChange={onPostChange} value={props.newPostText} /></div>
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