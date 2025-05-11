import React from "react";
import {
  FaHome,
  FaUpload,
  FaFileAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const menuItems = [
  { icon: <FaHome />, label: "Home", route: "/dashboard" },
  { icon: <FaUpload />, label: "Upload ECG", route: "/upload-ecg" },
  { icon: <FaFileAlt />, label: "Reports", route: "/report" },
  { icon: <FaBell />, label: "Notifications", route: "/notification" },
  { icon: <FaCog />, label: "Settings", route: "/settings" },
  { icon: <FaSignOutAlt />, label: "Logout", route: "/logout" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <aside className="bg-[#2D0101] text-[#999999] w-[280px] min-h-screen p-4">
      <h1 className="text-[24px] text-[#FFFFFF] font-bold mb-6 p-2">
        HeartShield
      </h1>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.route)}
            className="flex items-center space-x-2 p-2 cursor-pointer hover:text-white hover:bg-white hover:bg-opacity-10 rounded"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;



