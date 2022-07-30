import { NavLink } from "react-router-dom"

const styles = {
    navAuth: {
        marginRight: 10,
    },
}

const AuthNav = () => (
    <nav>
        <NavLink to="/register" style={styles.navAuth}>
            Registation
        </NavLink>
        <NavLink to="/login" style={styles.navAuth}>
            LogIn
        </NavLink>
    </nav>
);

export default AuthNav;