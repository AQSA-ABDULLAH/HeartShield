import React from "react";
import { LogOut } from "lucide-react"; // Optional: lucide-react icon

const LogoutModal = ({ isOpen, onCancel, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-[#F4EDED] rounded-full p-3">
            <LogOut className="text-[#4B0000] w-6 h-6" />
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-1">
          Are you sure you want to logout?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          You will need to login again to access your HeartShield account.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-100 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="bg-[#4B0000] text-white px-5 py-2 rounded-md hover:bg-[#5d0000]"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
