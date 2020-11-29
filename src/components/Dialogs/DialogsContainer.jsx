import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// контейнерная компонента вручную

// const DialogsContainer = () => {

//     // let state = props.store.getState().dialogsPage;

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     const onSendMessageClick = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }

//                     let onMessageChange = (mess) => {
//                         const action = updateNewMessageActionCreator(mess);
//                         store.dispatch(action);
//                     }

//                     return (
//                         <Dialogs updateNewMessageBody={onMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

// объекты f1 и f2 - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (mess) => {
            const action = updateNewMessageActionCreator(mess);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
// контейнерная компонента с помощью react-redux
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 