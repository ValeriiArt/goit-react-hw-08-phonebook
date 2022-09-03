import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";




export const PrivateRoute = () => {
    const token = useSelector(state => state.auth.token);
    // if (!token) {
    //     return <Navigate to='/login' replace />;
    // };

    // return <Outlet/>;

    return token ? <Outlet/> : <Navigate to='/login' replace={true} />
};


