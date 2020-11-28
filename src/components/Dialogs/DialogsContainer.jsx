import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    // let state = props.store.getState().dialogsPage;

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    const onSendMessageClick = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let onMessageChange = (mess) => {
                        const action = updateNewMessageActionCreator(mess);
                        store.dispatch(action);
                    }

                    return (
                        <Dialogs updateNewMessageBody={onMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;