import React from 'react';
import { updateNewMessageActionCreator, addMessageActionCreater } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => (
    <StoreContext.Consumer> 
        { store => {
            const state = store.getState().dialogsPage;

            const onMessageChange = text => store.dispatch(updateNewMessageActionCreator(text));
    
            const onMessageClick = () => store.dispatch( addMessageActionCreater() );

            return(
                <Dialogs messageClick={onMessageClick}
                    messageChange={onMessageChange} 
                    newMessageText={state.newMessageText} 
                    dialogsPage={state} />
            );
        }
    };

    </StoreContext.Consumer>
);

export default DialogsContainer;