import Profile from "./Profile";
import React from "react";
import {getUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";

// класс получения данных других пользователей
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        // редирект на страницу логина со страницы профиля если пользователь не залогинен
        if (!this.props.isAuth) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

// дополнительная обертка презентационной компоненты специальной
// "роутинговой" для получения параметров адресной строки
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile,
})(WithUrlDataContainerComponent);
