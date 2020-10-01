
import  { combineReducers, createStore } from 'redux';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const reducersBundle = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

const store = createStore(reducersBundle);

export default store;