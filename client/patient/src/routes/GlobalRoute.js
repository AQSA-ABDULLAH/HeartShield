import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import RoutesStack from "./Routes";
import Sidebar from "../components/molecules/sidebar/Sidebar";
import Login from "../pages/Login/Login";
import {Route,Routes} from 'react-router-dom'
import { useSelector } from "react-redux";
import Signup from "../login-model/signup/Signup";
import { useLocation } from 'react-router-dom';
import Home from "../pages/Home";

const GlobalRoute = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current path

  useEffect(() => {
  if (!isSignedIn) {
    const publicRoutes = ['/', '/login', '/signup'];
    if (!publicRoutes.includes(location.pathname)) {
      navigate('/login');
    }
  } else {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      navigate('/dashboard');
    }
  }
}, [isSignedIn, navigate, location]);


  return (
    <>
      {isSignedIn ?
        (
          <>
            <RoutesStack
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          </>
        ) :
        (
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )
      }
    </>
  );
};


export default GlobalRoute;