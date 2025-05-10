import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
// import "./route.css";
import Home from "../pages/Home.js";
import Login from "../login-model/Login.js";
import Signup from "../login-model/signup/Signup.js";
import Dashboard from "../pages/Dashboard.js";
import { useSelector } from "react-redux";
function AppRoutes() {
  const isSignedIn = useSelector((state) => state.auth?.isSignedIn);

    const navigate = useNavigate()

   useEffect(() => {
    if (!isSignedIn) {
      navigate('/login'); 
    } else {
      console.log("User is signed in");
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
