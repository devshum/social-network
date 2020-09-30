const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (action, state) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            const message =  { id: 6, message: state.newMessageText }
            state.messagesData.push(message);
            state.newMessageText = '';
            return state;
        default: return state;
    }   
};

export const updateNewMessageActionCreator = text => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });

export const addMessageActionCreater = () => ({ type: 'ADD-MESSAGE' });

export default dialogsReducer;