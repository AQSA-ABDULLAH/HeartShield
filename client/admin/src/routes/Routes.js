import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ErrorPage from "../pages/404/ErrorPage"


const RoutesStack = () => {



  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AdminDashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;