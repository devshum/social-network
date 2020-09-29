let rerenderEntireTree = () => console.log('state has been changed');

const state = {
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
};

window.state = state;

export const addPost = () => {
  const newPost = {id: 3, post: state.profilePage.newPostText, likeCount: 0};

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const observer = observer => rerenderEntireTree = observer;


export default state;