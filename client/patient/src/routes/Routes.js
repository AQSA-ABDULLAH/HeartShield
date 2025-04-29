import React from "react";
import { Routes, Route} from "react-router-dom";
// import "./route.css";
import Home from "../pages/Home.js";
import Login from "../login-model/Login.js";

function AppRoutes() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
