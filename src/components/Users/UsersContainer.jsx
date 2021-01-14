import React from 'react';
// новый импорт переименованных функций
import {
    doFollow,
    doUnfollow,
    getUsers,
    setCurrentPage,
    toFollow,
    toggleFollowingInProgress,
    unfollow
} from "../../Redux/users-reducer";
import {connect} from 'react-redux';
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount
} from "../../Redux/users-selectors";

// классовый подход создания компоненты
class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            // вызов колбека thunk
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    // изменение страницы
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   unfollow={this.props.doUnfollow}
                   follow={this.props.doFollow}
            />
        </>
    }
}

// объекты mapStateToProps и mapDispatchToProps - передаются в презентационную компоненту как пропсы
// mapStateToProps - данные из state, которые будут отправляться в презентационную компоненту
// mapDispatchToProps - колбэки, которые будут отправляться в презентационную компоненту - теперь просто названия колбэков

// mapStateToProps - данные из state (файл user-reducer), которые отправляются в презентационную компоненту
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress,
//     }
// }

// использование селектора для получения данных
let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    }
}

// конвейерная обработка компонента для уменьшения количества кода.
// Целевой компонент пишется во вторых скобках, применяемые на нем hoc'и пишутся снизу вверх
export default compose(
    connect(mapStateToProps,
        {
            toFollow, unfollow, setCurrentPage,
            toggleFollowingInProgress, getUsers, doUnfollow, doFollow
        })
)(UsersContainer);
