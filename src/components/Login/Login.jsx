import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {userLogin} from "../../Redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    console.log(props);
    const onSubmit = (formData) => {
        console.log(formData);
        props.userLogin(formData.login, formData.password, formData.rememberMe);
    };
    if(props.isAuth) {
        return (
            <Redirect to={"/profile"}/>
        )
    }
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
                <Field
                    placeholder={"Login"}
                    name={"login"}
                    validate={[required]}
                    component={Input}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    type={"password"}
                    name={"password"}
                    validate={[required]}
                    component={Input}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input}/> remember me
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps,
    { userLogin }
)(Login);
