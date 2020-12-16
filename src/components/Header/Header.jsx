import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src="https://img2.freepng.ru/20180315/vrq/kisspng-logo-lion-shutterstock-red-gradient-lionhead-5aab05d93512d0.9761940315211575932174.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );
}

export default Header;