const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
//
let initialState = {
    users: []
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
                users: [...action.users]
            }
        default:
            return state;
    }
}

// action creator для выполнения действий, возвращает action
export const followAC = (userId) => ({type: FOLLOW, userId});     // добавление в подписки
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId}); // удаление из подписок
export const setUsersAC = (users) => ({type: SET_USERS, users}); // добавление в друзья

export default userReducer;