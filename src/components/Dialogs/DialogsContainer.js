import React from 'react';
import { updateNewMessageActionCreator, addMessageActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
    const state = props.store.getState().dialogsPage;

    const onMessageChange = text => props.store.dispatch(updateNewMessageActionCreator(text));
    
    const onMessageClick = () => props.store.dispatch( addMessageActionCreater() );

    return(<Dialogs messageClick={onMessageClick}
                    messageChange={onMessageChange} 
                    newMessageText={state.newMessageText} 
                    dialogsPage={state} />);
};

export default DialogsContainer;