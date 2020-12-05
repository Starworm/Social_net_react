const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: '123' },
        { id: 3, message: 'bla-bla' },
    ],
    newMessage: '',
    dialogs: [
        { id: 1, name: 'Vaas' },
        { id: 2, name: 'Jason' },
        { id: 3, name: 'Dennis' },
        { id: 4, name: 'Citra' },
        { id: 5, name: 'Alik' }
    ]
}

// редьюсер, выполняющий определенные действия в зависимости от полученного типа экшена
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMsg = {
                id: 4,
                message: state.newMessage
            };
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, newMsg],
            };
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessage: action.newText
                // messages: [...state.messages]   // закомментировано, потому что копию нужно делать только того, что меняется
            };
        }
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