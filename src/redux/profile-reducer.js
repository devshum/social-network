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
    const newState = {
      ...state,
      postsData: [...state.postsData]
    }

    switch(action.type) {
        case ADD_POST: {
        const post = state.newPostText;
          return {
            ...state,
            postsData: [...state.postsData, {id: 3, post: post, likeCount: 0}],
            newPostText: ''
          };
        }
        
        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            newPostText: action.newPostText
          }
        }
        default: return state;
    };
};

export const addPostActionCreater = () => ({ type : 'ADD-POST' });

export const updateNewPostActionCreator = text => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });

export default profileReducer;