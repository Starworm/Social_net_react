const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMsg = {
                id: 4,
                message: state.newMessage
            };
            state.messages.push(newMsg);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newText: text
    }
};

export default dialogsReducer;