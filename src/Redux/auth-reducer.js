import {usersAPI} from "../api/api";

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
                ...action.data,   // склеенные данные из userId, email и login
                isAuth: true
            };
        default:
            return state;
    }
};

// action creator для выполнения действий, возвращает action
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId,  email, login}});     // установка авторизационных данных пользователя

// thunk для логина пользователя
// export const userLogin = () => {
//     return (dispatch) => {
//         usersAPI.login()
//             .then(response => {
//                 if (response.data['resultCode'] === 0) {
//                     let {id, email, login} = response.data.data;
//                     dispatch(setAuthUserData(id, email, login));
//                 }
//             });
//     }
// };

// thunk для логина пользователя в приложении
export const userLogin = (login, password, isRemember) => {

    return (dispatch) => {
        usersAPI.userLogin(login, password, isRemember)
            .then(response => {
                if (response.data['resultCode'] === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export default authReducer;
