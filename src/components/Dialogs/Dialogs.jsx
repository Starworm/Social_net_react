import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs =
        [
            { id: 1, name: 'Vaas' },
            { id: 2, name: 'Jason' },
            { id: 3, name: 'Dennis' },
            { id: 4, name: 'Citra' },
            { id: 5, name: 'Alik' }
        ];

    let messages =
        [
            { id: 1, message: 'Hi' },
            { id: 2, message: '123' },
            { id: 3, message: 'bla-bla' },
        ];

    let dialogsElements = dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });

    let messagesElements = messages.map((el) => {
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