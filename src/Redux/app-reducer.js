import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

/** Редьюсер, отвечающий за всё приложение */

const SET_INITIALIZED = 'SET_INITIALIZED';  // инициализировано приложение

// исходный стейт
let initialState = {
    /** инициализировано ли приложение */
    initialized: false,

};

// редьюсер, выполняющий определенные действия в зависимости от полученного типа экшена
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

// action creator для выполнения действий, возвращает action
export const initializedSuccessed = () => ({type: SET_INITIALIZED});     // установка авторизационных данных пользователя

// thunk для инициализации приложения
export const initializeApp = () => (dispatch) => {
    let dispatchPromise = dispatch(getAuthUserData());
    dispatchPromise
        .then(() => {
            dispatch(initializedSuccessed());
        });
};

export default appReducer;
