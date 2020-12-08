import React from 'react';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users_old from "./Users_old";
import { connect } from 'react-redux';
import * as axios from "axios";
import Users from "./Users";

// классовый подход создания компоненты
class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                });
        }
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      toFollow={this.props.toFollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);