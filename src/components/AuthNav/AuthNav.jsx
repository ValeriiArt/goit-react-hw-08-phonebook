import { NavLink } from "react-router-dom"
import s from './AuthNav.module.css'

const AuthNav = () => (
    <nav>
        <NavLink to="/register"
             className={({ isActive }) => (isActive ? s.active : s.navLink)}>
            Registation
        </NavLink>
        <NavLink to="/login"
            className={({ isActive }) => (isActive ? s.active : s.navLink)}>
            LogIn
        </NavLink>
    </nav>
);

export default AuthNav;