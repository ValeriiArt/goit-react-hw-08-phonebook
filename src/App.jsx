import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from './redux/auth';
import {PrivateRoute} from 'components/PrivateRoute';
import {PublicRoute} from 'components/PublicRoute';


import 'react-notifications/lib/notifications.css';



const Layout = lazy(() => import('./components/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(()=> import('./pages/Login'));



export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/" element={<PublicRoute />} >
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />} >
              <Route path="/contacts" element={<Contacts/>} />
            </Route>
          </Route>
        </Routes>
      </Suspense> 
  )
};



