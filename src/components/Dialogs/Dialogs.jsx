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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Vaas" id="1" />
                <DialogItem name="Jason" id="2" />
                <DialogItem name="Dennis" id="3" />
                <DialogItem name="Citra" id="4" />
                <DialogItem name="Alik" id="5" />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message="What's up" />
                <Message message='Far cry' />
            </div>
        </div>
    );
}

export default Dialogs;