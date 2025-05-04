import React from "react";
import { Routes, Route} from "react-router-dom";
// import "./route.css";
import Login from "../login-model/Login.js";
import Signup from "../login-model/signup/Signup.js";

function AppRoutes() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
