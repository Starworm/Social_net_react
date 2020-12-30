import * as axios from "axios";

/** экземпляр класса axios для запросов на сервер
 * содержит в себе настройки с данными - креденшелсы, базовый url для запросов и хэдер с токеном*/
const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "4f5b3e29-825e-41fc-8dde-59e254917a07",
    },
});

export const usersAPI = {
    // постраничный вывод пользователей
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

/** логин пользователя */
export const login = () => {
    return instanceAxios.get(`auth/me`)
}

/** получение профиля пользователя */
export const openUserProfile = (userId) => {
    return instanceAxios.get(`profile/` + userId)
}

/** отписка от пользователя */
export const unfollowUser = (id) => {
    return instanceAxios.delete(`follow/${id}`, {} )
}

/** подписка на пользователя */
export const followUser = (id) => {
    return instanceAxios.post(`follow/${id}`, {}, )
}
