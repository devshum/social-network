const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }

        case ADD_MESSAGE: {
            const message = state.newMessageText;
            
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: message }],
                newMessageText: ''
            }
        }

        default: return state;
    }   
};

export const updateNewMessageActionCreator = text => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });

export const addMessageActionCreater = () => ({ type: 'ADD-MESSAGE' });

export default dialogsReducer;