import React from 'react';
import {
  FaHome,
  FaUpload,
  FaFileAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const menuItems = [
  { icon: <FaHome />, label: 'Home' },
  { icon: <FaUpload />, label: 'Upload ECG' },
  { icon: <FaFileAlt />, label: 'Reports' },
  { icon: <FaBell />, label: 'Notifications' },
  { icon: <FaCog />, label: 'Settings' },
  { icon: <FaSignOutAlt />, label: 'Logout' },
];

const Sidebar = () => {
  return (
    <aside className="bg-[#2D0101] text-[#999999] w-[280px] min-h-screen p-4">
      <h1 className="text-[24px] text-[#FFFFFF] font-bold mb-6 p-2">HeartShield</h1>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
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


