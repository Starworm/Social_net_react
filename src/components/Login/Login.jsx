import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {userLogin} from "../../Redux/auth-reducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        userLogin(formData.login, formData.password, formData.rememberMe);
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
/**
 * Форма для логина
 * Специальный компонент Field создает поле, которое будет управляться
 * redux-form'ой. В аттрибуте component указывается какой именно тег
 * будет использоваться в данном поле - input, textarea,...
 */
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

export default connect(
    userLogin
)(Login);
