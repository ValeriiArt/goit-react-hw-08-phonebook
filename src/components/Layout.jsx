import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { authSelectors } from "redux/auth";
import Navigation from './Navigation';
// import UserMenu from './UserMenu';
// import AuthNav from './AuthNav';


const styles = {
    header: {
        top: 0,
        left: 0,
        position: 'sticky',
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: 64,
        paddingRight: 24,
        paddingLeft: 24,
        paddingTop: 12,
        paddingBottom: 12,
        color: '#fff',
        backgroundColor: '#bacddc',
    },
    container: {
        display: 'block',
        maxWidth: 1024,
        margin: '10px auto',
        paddingLeft: 15,
        paddingRight: 15,
    },
};



export default function Layout() {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <>
            <header style={styles.header}>
                <Navigation />
                {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            </header>
            <main>
                <div style={styles.container}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
}