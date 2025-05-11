import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
// import "./route.css";
import Home from "../pages/Home.js";
import Login from "../login-model/Login.js";
import Signup from "../login-model/signup/Signup.js";
import Dashboard from "../pages/Dashboard.js";
import ECGUploader from "../pages/Upload-ECG.js";
import Notifications from "../pages/Notifications.js";
import ReportsTable from "../pages/Reports.js";
import Settings from "../pages/Settings.js";
import LogoutModal from "../pages/LogoutModal.js";

function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload-ecg" element={<ECGUploader />} />
        <Route path="/report" element={<ReportsTable />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<LogoutModal />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
