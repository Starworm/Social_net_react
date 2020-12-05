import React from 'react';
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users from "./Users";
import { connect } from 'react-redux';

// объекты mapStateToProps и mapDispatchToProps - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state, которые будут отправляться в презентационную компоненту
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту

// mapStateToProps - данные из state, которые будут отправляться в презентационную компоненту
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;