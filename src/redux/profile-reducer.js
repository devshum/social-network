const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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

    newPostText: 'it-kamasutra',
    profile: null
};

const profileReducer = (state = initialState, action) => {

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

        case SET_USER_PROFILE: {
          return {
            ...state,
            profile: action.profile
          }
        }

        default: return state;
    };
};

export const addPostActionCreater = () => ({ type : 'ADD-POST' });

export const updateNewPostActionCreator = text => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;