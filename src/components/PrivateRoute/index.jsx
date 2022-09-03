import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";




const PrivateRoute = ({children}) => {
    const token = useSelector(state => state.auth.token);
    if (!token) {
        return <Navigate to='/login' replace />;
    };

    return <Outlet/>;

    // return !!token ? children : <Navigate to='/login' replace={true} />
};

export default PrivateRoute;
