import Profile from "./Profile";
import React from "react";
import {setUserProfile, toOpenUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

// класс получения данных других пользователей
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18;
        }
        this.props.toOpenUserProfile();
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

// дополнительная обертка презентационной компоненты специальной
// "роутинговой" для получения параметров адресной строки
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile, toOpenUserProfile,
})(WithUrlDataContainerComponent);
