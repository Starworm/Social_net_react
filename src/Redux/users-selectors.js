// селекторы для получения данных из редьюсеров

/**
 * Селектор для получения всех пользователей
 * @param state
 */
export const getAllUsers = (state) => {
    return state.usersPage.users;
};

/**
 * Селектор для получения количества записей на странице
 * @param state
 */
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

/**
 * Селектор для общего количества записей
 * @param state
 */
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

/**
 * Селектор для получения текущей страницы
 * @param state
 */
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

/**
 * Селектор для отображения спиннера (получаем ли данные с бэка)
 * @param state
 */
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

/**
 * Селектор для получения массива, содержащего добавляемых или удаляемых пользователей в/из друзей (для блокировки кнопки Follow/Unfollow
 * @param state
 */
export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress;
};
