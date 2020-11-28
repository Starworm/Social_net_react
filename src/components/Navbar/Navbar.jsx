import { NavLink } from 'react-router-dom';
import Friend from './Friend';
import s from './Navbar.module.css';

const Navbar = (props) => {

    /** Потом исправить */
    // let friendElement = props.friends.friends.map((el) => {
    //     return <Friend name={el.name} avatar={el.avatar} />
    // })

    return (
        <nav className={s.nav}>
            <div className={s['chapt-group']}>
                <div className={s.linkback}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.linkback}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.linkback}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.linkback}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.linkback}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>
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