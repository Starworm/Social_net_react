import React from 'react';
// старый импорт
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC} from "../../Redux/users-reducer";
// новый импорт переименованных функций
import {toFollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../Redux/users-reducer";
import Users_old from "./Users_old";
import {connect} from 'react-redux';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";

// классовый подход создания компоненты
class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true
                })
                .then(responce => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                });
        }
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   toFollow={this.props.toFollow}
            />
        </>
    }
}

// объекты mapStateToProps и mapDispatchToProps - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state, которые будут отправляться в презентационную компоненту
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту

// mapStateToProps - данные из state (файл user-reducer), которые отправляются в презентационную компоненту
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту для вызова уже там

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toFollow: (userId) => {
//             const action = followAC(userId);
//             dispatch(action);
//         },
//         unfollow: (userId) => {
//             const action = unfollowAC(userId);
//             dispatch(action);
//         },
//         setUsers: (users) => {
//             const action = setUsersAC(users);
//             dispatch(action);
//         },
//         setCurrentPage: (page) => {
//             const action = setCurrentPageAC(page);
//             dispatch(action);
//         },
//         setTotalUsersCount: (totalCount) => {
//             const action = setTotalUsersCountAC(totalCount);
//             dispatch(action)
//         },
//         toggleIsFetching: (isFetching) => {
//             const action = toggleIsFetchingAC(isFetching);
//             dispatch(action);
//         }
//
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// передача просто объекта - названий колбэков, упрощение кода выше
export default connect(mapStateToProps,
    {
        toFollow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching
    }
)(UsersContainer);