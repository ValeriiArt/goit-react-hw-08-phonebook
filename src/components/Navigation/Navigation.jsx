import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { authSelectors } from "redux/auth";
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './Navigation.module.css'

const Navigation = () => {
    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn)
    return (
        <>
            <nav>
                <NavLink to="/" 
                    className={({ isActive }) => (isActive ? s.active : s.navLink)}>
                    Home
                </NavLink>
                {isLoggedIn && <NavLink to="/contacts"
                    className={({ isActive }) => (isActive ? s.active : s.navLink)}>
                    Contacts
                </NavLink>}
                
            </nav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            
        </>
    );
};
export default Navigation;