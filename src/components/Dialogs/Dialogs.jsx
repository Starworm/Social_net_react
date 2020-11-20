import DialogItem from './DialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });

    let messagesElements = props.state.messages.map((el) => {
        return <Message message={el.message} />
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;