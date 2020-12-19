import Header from "./Header";
import React from "react";
import * as axios from "axios";
import {connect} from 'react-redux';
import {setAuthUserData} from "../../Redux/auth-reducer";
import {login} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        login()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);