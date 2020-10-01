import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
    const dialogsElements = props.dialogsPage.dialogsData.map(dialogObj => <DialogItem name={dialogObj.name} id={dialogObj.id} key={dialogObj.id} /> )

    const messagesElements = props.dialogsPage.messagesData.map(messageObj => <Message text={messageObj.message} id={messageObj.id} key={messageObj.id} /> )

    const onMessageChange = e => {
        const text = e.target.value;
        props.messageChange(text);
    };

    const onMessageClick = () => {
        props.messageClick();
    };


    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                { dialogsElements }

            </div>

            <div className="messages">

                { messagesElements }

                <textarea placeholder="Enter new message" onChange={onMessageChange} value={props.newMessageText}></textarea>
                <div>
                    <button onClick={onMessageClick}>Add message</button>
                </div>
            
            </div>

            
        </div>
    );
};

export default Dialogs;