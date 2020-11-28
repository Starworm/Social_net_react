import DialogItem from './DialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
    console.log(props);

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });

    let messagesElements = state.messages.map((el) => {
        return <Message message={el.message} />
    })

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let mess = event.target.value
        props.updateNewMessageBody(mess);
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
                            value={state.newMessage}
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