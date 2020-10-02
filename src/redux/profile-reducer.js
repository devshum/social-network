const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [ 
      { id: 1, 
        post: "Hi, how are you", 
        likeCount: 1 
      },

      { id: 2, 
        post: "It's my first post", 
        likeCount: 4 
      } ],

    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPost = {id: 3, post: state.newPostText, likeCount: 0};
            const newState = {...state};
            newState.postsData = [...state.postsData];
            newState.postsData.push(newPost);
            newState.newPostText = '';
            return newState;
        }
        case UPDATE_NEW_POST_TEXT: {
            const newState = {...state};
            newState.newPostText = action.newText;
            return newState;
        }
        default: return state;
    };
};

export const addPostActionCreater = () => ({ type : 'ADD-POST' });

export const updateNewPostActionCreator = text => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });

export default profileReducer;