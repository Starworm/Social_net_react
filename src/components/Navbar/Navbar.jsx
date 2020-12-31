import { NavLink } from 'react-router-dom';
import Friend from './Friend';
import s from './Navbar.module.css';
import React from "react";

const Navbar = (props) => {

    /** Потом исправить */
    // let friendElement = props.friends.friends.map((el) => {
    //     return <Friend name={el.name} avatar={el.avatar} />
    // })

    return (
        <nav className={s.nav}>
            <div className={s['chapt-group']}>
                <NavLink to="/profile" activeClassName={s.activeLink} className={s.linkback}>
                    Profile
                </NavLink>
                <NavLink to="/dialogs" activeClassName={s.activeLink} className={s.linkback}>
                    Messages
                </NavLink>
                <NavLink to="/users" activeClassName={s.activeLink} className={s.linkback}>
                    Users
                </NavLink>
                <NavLink to="/news" activeClassName={s.activeLink} className={s.linkback}>
                    News
                </NavLink>
                <NavLink to="/music" activeClassName={s.activeLink} className={s.linkback}>
                    Music
                </NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink} className={s.linkback}>
                    Settings
                </NavLink>
            </div>
            <div>
                <div className={s.nav__titleBlock}>
                    <span className={s.nav__title}>Friends</span></div>
                {/* <div className={s.nav__friendsContainer}>{friendElement}</div> // Потом исправить */}
            </div>
        </nav>
    );
}

export default Navbar;
