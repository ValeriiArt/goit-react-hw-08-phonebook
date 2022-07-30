import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { useNavigate } from 'react-router-dom';


const styles = {
    userLoginInfo: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);  
    const navigate = useNavigate();



    return (
        <div style={styles.userLoginInfo}>
            <span>Welcome, {name}</span>
            <button type="button" onClick={() => {
                dispatch(authOperations.logOut());
                navigate('/');
            }}>
                Sing Out
            </button>
        </div>
    )
}