import React from 'react';
import classes from './Post.module.css';

const Post = props => (
    <div className={classes.item}>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="user ava"/>
        {props.message}
        <span>Like</span> {props.likeCount}
    </div>
);

export default Post;