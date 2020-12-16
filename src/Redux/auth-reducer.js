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
}

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
}

// action creator для выполнения действий, возвращает action
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId,  email, login}});     // установка авторизационных данных пользователя
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); // установка общего количества пользователей

export default authReducer;