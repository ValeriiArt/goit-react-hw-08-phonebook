import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

const styles = {
    userLoginInfo: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    // const avatar = defaultAvatar;


    return (
        <div style={styles.userLoginInfo}>
            <span>Welcome, {name}</span>
            <button type="button" onClick={()=> dispatch(authOperations.logOut())}>
                Sing Out
            </button>
        </div>
    )
}