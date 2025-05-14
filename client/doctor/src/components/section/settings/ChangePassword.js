import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        className="mb-6 px-4 py-2 border border-gray-400 text-sm rounded hover:bg-gray-100"
        onClick={() => navigate("/settings")}
      >
        Back to Settings
      </button>

      <h1 className="text-3xl font-bold mb-1">Change Password</h1>
      <p className="text-gray-500 mb-6">Update your account password</p>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter current password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#330000] text-white py-2 rounded-md hover:bg-[#4b0000]"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
