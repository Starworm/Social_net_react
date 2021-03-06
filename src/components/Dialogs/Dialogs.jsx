import DialogItem from './DialogItem/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((el) => {
        return <DialogItem name={el.name} key={el.id} id={el.id}/>
    });

    let messagesElements = state.messages.map((el) => {
        return <Message message={el.message} key={el.id}/>
    });

    let addNewMessage = (values) => {
        props.sendMessage(values['newMessageBody']);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

// валидация поля сообщения на максимальную длину в 10 символов
const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder="Enter your message"
                    name={"newMessageBody"}
                    component={Textarea}
                    validate={[required, maxLength10]}
                    cols="30" rows="5">
                </Field>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;
