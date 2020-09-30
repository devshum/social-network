import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageActionCreator, addMessageActionCreater } from '../../redux/dialogs-reducer'

const Dialogs = props => {

    const state = props.store.getState().dialogsPage;
   
    const dialogsElements = state.dialogsData.map(dialogObj => <DialogItem name={dialogObj.name} id={dialogObj.id} key={dialogObj.id} /> )

    const messagesElements = state.messagesData.map(messageObj => <Message text={messageObj.message} id={messageObj.id} key={messageObj.id} /> )

    const onMessageChange = e => {
        const text = e.target.value;

        props.store.dispatch(updateNewMessageActionCreator(text));
    };


    const onMessageClick = () => {
        props.store.dispatch( addMessageActionCreater() );
    };


    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                { dialogsElements }

            </div>

            <div className="messages">

                { messagesElements }

                <textarea placeholder="Enter new message" onChange={onMessageChange} value={props.store.newMessageText}></textarea>
                <div>
                    <button onClick={onMessageClick}>Add message</button>
                </div>
            
            </div>

            
        </div>
    );
};

export default Dialogs;