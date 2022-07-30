import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { authSelectors } from "redux/auth";
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';

const styles = {
    navAuth: {
        marginLeft: 10,
    },
};

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn);
    
    return (
        <>
            <nav>
                <NavLink to="/" style={styles.navAuth}>
                    Home
                </NavLink>
                {isLoggedIn && <NavLink to="/contacts" style={styles.navAuth}>
                    Contacts
                </NavLink>}
                
            </nav>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </>
    );
};
export default Navigation;