import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { authSelectors } from "redux/auth";


const PublicRoute = () => {
  
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


    return isLoggedIn ? <Navigate to='/contacts'/> : <Outlet/>;

};

export default PublicRoute;