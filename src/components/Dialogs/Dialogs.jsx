import DialogItem from './DialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });

    let messagesElements = props.dialogsPage.messages.map((el) => {
        return <Message message={el.message} />
    })

    const onSendMessageClick = () => {
        // const action = { type: 'ADD-MESSAGE' };
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let mess = event.target.value
        const action = updateNewMessageActionCreator(mess);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            value={props.dialogsPage.newMessage}
                            cols="30" rows="5"
                            onChange={onMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;