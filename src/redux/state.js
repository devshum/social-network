import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

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
    this._state.profilePage = profileReducer(action, this._state.profilePage);
    this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);

    this._rerenderEntireTree(this._state);
  }
}

window.store = store;

export default store;