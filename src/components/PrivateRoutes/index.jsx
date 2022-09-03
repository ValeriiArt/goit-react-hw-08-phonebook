import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import {authSelectors} from "redux/auth";



const PrivateRoutes = () => {
    // const token = useSelector(state => state.auth.token);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // console.log(token)
    
    return isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
};

export default PrivateRoutes;
