const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// исходный стейт
let initialState = {
    users: [],
    /** количество записей на странице */
    pageSize: 10,
    /** общее количество записей */
    totalUsersCount: 0,
    /** получаем ли данные с бэка */
    isFetching: true,
    /** текущая страница */
    currentPage: 1,
}

// редьюсер, выполняющий определенные действия в зависимости от полученного типа экшена
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users:
                    state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

// action creator для выполнения действий, возвращает action
export const toFollow = (userId) => ({type: FOLLOW, userId});     // добавление в подписки
export const unfollow = (userId) => ({type: UNFOLLOW, userId}); // удаление из подписок
export const setUsers = (users) => ({type: SET_USERS, users}); // добавление в друзья
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}); // изменение странициы
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalCount: totalUsersCount}); // установка общего количества пользователей
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); // установка общего количества пользователей

export default userReducer;