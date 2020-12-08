import React from 'react';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users_old from "./Users_old";
import { connect } from 'react-redux';
import Users from "./Users";

// объекты mapStateToProps и mapDispatchToProps - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state, которые будут отправляться в презентационную компоненту
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту

// mapStateToProps - данные из state (файл user-reducer), которые будут отправляться в презентационную компоненту
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту для вызова уже там
let mapDispatchToProps = (dispatch) => {
    return {
        toFollow: (userId) => {
            const action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            const action = unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            const action = setUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (page) => {
            const action = setCurrentPageAC(page);
            dispatch(action);
        },
        setTotalUsersCount: (totalCount) => {
            const action = setTotalUsersCountAC(totalCount);
            dispatch(action)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);