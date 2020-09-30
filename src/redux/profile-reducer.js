const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (action, state) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {id: 3, post: state.newPostText, likeCount: 0};
    
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default: return state;
    };
};

export const addPostActionCreater = () => ({ type : 'ADD-POST' });

export const updateNewPostActionCreator = text => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });

export default profileReducer;