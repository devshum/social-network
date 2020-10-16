
import  { combineReducers, createStore } from 'redux';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

const reducersBundle = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(reducersBundle);

window.store = store;

export default store;