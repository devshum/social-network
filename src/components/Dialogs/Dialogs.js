import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
 

    const dialogsElements = props.state.dialogsData.map(dialogObj => <DialogItem name={dialogObj.name} id={dialogObj.id} key={dialogObj.id} /> )

    const messagesElements = props.state.messagesData.map(messageObj => <Message text={messageObj.message} id={messageObj.id} key={messageObj.id} /> )

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                { dialogsElements }

            </div>

            <div className="messages">

                { messagesElements }
            
            </div>
        </div>
    );
};

export default Dialogs;