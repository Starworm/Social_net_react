const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: '123' },
        { id: 3, message: 'bla-bla' },
    ],
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
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMsg],
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
};


export default dialogsReducer;
