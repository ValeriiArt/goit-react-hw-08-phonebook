import { Outlet } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import {NotificationContainer} from 'react-notifications';


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
            <NotificationContainer/>
        </>
    );
}