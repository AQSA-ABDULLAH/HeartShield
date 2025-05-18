import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/404/ErrorPage";
import Signup from "../login-model/signup/Signup";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import ECGUploader from "../pages/Upload-ECG/Upload-ECG";
import Reports from "../pages/Reports/Reports";
import Notifications from "../pages/Notificatons/Notifications";
import Settings from "../pages/Settings/Settings";
import ForgetPasswordOtp from "../login-model/forget-password/OtpCode";

const RoutesStack = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password-otp" element={<ForgetPasswordOtp/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-ecg" element={<ECGUploader />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;
