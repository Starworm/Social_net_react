import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    console.log(s);
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
        </nav>
    );
}

export default Navbar;