import DialogItem from './DialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    console.log(props);
    let state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (mess) => {
        const action = updateNewMessageActionCreator(mess);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state} />
    );
}

export default DialogsContainer;