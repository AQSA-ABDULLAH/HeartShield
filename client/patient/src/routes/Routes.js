import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/404/ErrorPage";
import Signup from "../login-model/signup/Signup";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard/Dashboard";

const RoutesStack = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;
