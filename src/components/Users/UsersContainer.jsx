import React from 'react';
// новый импорт переименованных функций
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toFollow,
    toggleFollowingInProgress,
    toggleIsFetching,
    unfollow
} from "../../Redux/users-reducer";
import {connect} from 'react-redux';
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";

// классовый подход создания компоненты
class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            // выносим логику выполнения запроса в отдельный файл api.js - аналог сервиса в Angular
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
        }
    }

    // изменение страницы
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // выносим логику выполнения запроса в отдельный файл api.js - аналог сервиса в Angular
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }
}

// объекты mapStateToProps и mapDispatchToProps - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state, которые будут отправляться в презентационную компоненту
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту - теперь просто названия колбэков

// mapStateToProps - данные из state (файл user-reducer), которые отправляются в презентационную компоненту
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    }
}

// передача просто объекта - названий колбэков, упрощение кода выше
export default connect(mapStateToProps,
    {
        toFollow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
    }
)(UsersContainer);