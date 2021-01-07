import React from 'react';
import {addMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

// контейнерная компонента вручную, оставлена на память

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

// объекты mapStateToProps и mapDispatchToProps - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
};

// compose - конвейерная обработка компонента для уменьшения количества кода
// и лучшей читаемости последовательности обработки.
// Целевой компонент пишется во вторых скобках, применяемые на нем hoc'и пишутся снизу вверх
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
