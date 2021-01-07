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
    },

    /** получение подтверждения о залогине пользователя */
    login() {
        return instanceAxios.get(`auth/me`)
    },

    /** логин пользователя в приложении */
    userLogin(login, password, isRemember=false) {
        let body = {
            email: login,
            password,
            rememberMe: isRemember
        };
        return instanceAxios.post(`auth/login`, body);
    },

    /** логаут пользователя из приложении */
    userLogout() {
        return instanceAxios.delete(`auth/login`);
    },

    /** получение профиля пользователя */
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    },

    /** отписка от пользователя */
    unfollowUser(id) {
        return instanceAxios.delete(`follow/${id}`, {} )
    },

    /** подписка на пользователя */
    followUser(id) {
        return instanceAxios.post(`follow/${id}`, {}, )
    },
};

export const profileAPI = {
    /** получение профиля пользователя */
    getProfile(userId) {
        return instanceAxios.get(`profile/` + userId);
    },

    getStatus(userId) {
        return instanceAxios.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instanceAxios.put(`profile/status/`, { status: status });
    }
};
