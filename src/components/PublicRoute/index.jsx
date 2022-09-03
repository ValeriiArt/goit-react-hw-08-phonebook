import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { authSelectors } from "redux/auth";


const PublicRoute = ({children}) => {
  
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


    return isLoggedIn ? <Navigate to='/contacts' replace/> : <Outlet/>;

};

export default PublicRoute;