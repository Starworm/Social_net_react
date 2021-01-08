import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';  // установка пользовательских данных

// исходный стейт
let initialState = {
    /** id пользователя */
    userId: null,
    /** e-mail пользователя */
    email: null,
    /** login пользователя */
    login: null,
    /** получаем ли данные с бэка */
    isFetching: false,
    /** залогинен ли пользователь */
    isAuth: false,
};

// редьюсер, выполняющий определенные действия в зависимости от полученного типа экшена
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,   // склеенные данные из userId, email и login
            };
        default:
            return state;
    }
};

// action creator для выполнения действий, возвращает action
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});     // установка авторизационных данных пользователя

// thunk для подтверждения о залогине пользователя
export const getAuthUserData = () => (dispatch) => {
    return usersAPI.login()
        .then(response => {
            if (response.data['resultCode'] === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

// thunk для логина пользователя в приложении
export const userLogin = (login, password, isRemember) => (dispatch) => {
    usersAPI.userLogin(login, password, isRemember)
        .then(response => {
            if (response.data['resultCode'] === 0) {
                dispatch(getAuthUserData());
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Smth wrng...";
                // прекращение сабмита формы в случае ошибки
                dispatch(stopSubmit("login", {_error: messages}));
            }
        });
};

// thunk для логаута пользователя из приложении
export const logout = () => (dispatch) => {
    usersAPI.userLogout()
        .then(response => {
            if (response.data['resultCode'] === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;
