const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const store = {
  _state: {
    dialogsPage: {
      dialogsData: [ { id: 1, name: 'Vlad' },
                   { id: 2, name: 'Dima' },
                   { id: 3, name: 'Sanya' },
                   { id: 4, name: 'Denis' },
                   { id: 5, name: 'Artur' },
                   { id: 6, name: 'Igor' } ],

      messagesData: [ { id: 1, message: "Hello" },
                    { id: 2, message: "Hi" },
                    { id: 3, message: "Yo" },
                    { id: 4, message: "Whatsup" },
                    { id: 5, message: "Nice to meet you" } ],

      newMessageText: ''
    },
    
    profilePage: {
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
    }
  },
  _rerenderEntireTree() { console.log('state has been changed') },

  getState() { return this._state; },
  observer(observer) { this._rerenderEntireTree = observer },

  dispatch(action) {
    if(action.type === ADD_POST) {
      const newPost = {id: 3, post: this._state.profilePage.newPostText, likeCount: 0};
  
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireTree(this._state);


    } else if(action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);

    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);

    } else if(action.type === ADD_MESSAGE) {
      const message =  { id: 6, message: this._state.dialogsPage.newMessageText }
      this._state.dialogsPage.messagesData.push(message);
      this._state.dialogsPage.newMessageText = '';
      this._rerenderEntireTree(this._state);
    };
  }
}

export const addPostActionCreater = () => ({ type : ADD_POST });

export const updateNewPostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const updateNewMessageActionCreator = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });

window.store = store;

export default store;