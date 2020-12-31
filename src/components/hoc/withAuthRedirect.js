import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

/**
 *  HOC (high order component) для редиректа на страницу логина, если пользователь не залогинен
 * @param Component - компонент, на который перекидывают пользователя если он залогинен
 */
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            // редирект на страницу логина если пользователь не залогинен
            if (!this.props.isAuth) {
                return (
                    <Redirect to="/login"/>
                )
            }
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;

};
