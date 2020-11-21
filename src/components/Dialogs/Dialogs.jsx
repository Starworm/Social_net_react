import DialogItem from './DialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });

    let messagesElements = props.dialogsPage.messages.map((el) => {
        return <Message message={el.message} />
    })

    let newMessageElement = React.createRef();

    const newMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let mess = newMessageElement.current.value;
        props.updateNewMessage(mess);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageElement}
                        value={props.dialogsPage.newMessage}
                        cols="30" rows="5"
                        onChange={onMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={newMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;