import React from "react";
import { Routes, Route} from "react-router-dom";
// import "./route.css";
import Home from "../pages/Home.js";
import Login from "../login-model/Login.js";
import Signup from "../components/LoginModal/signup/Signup.js";

function AppRoutes() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
