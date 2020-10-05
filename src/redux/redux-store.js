
import  { combineReducers, createStore } from 'redux';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';

const reducersBundle = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

const store = createStore(reducersBundle);

export default store;