import React from "react";
import { Routes, Route} from "react-router-dom";
// import "./route.css";
import Home from "../pages/Home.js";

function AppRoutes() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
