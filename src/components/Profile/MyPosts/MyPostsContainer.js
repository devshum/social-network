import { updateNewPostActionCreator, addPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ postsPage: state.profilePage });

const mapDispatchToProps = dispatch => ({
    addPost: () => dispatch(addPostActionCreater()),
    updateNewPostText: text => dispatch(updateNewPostActionCreator(text))
});

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;