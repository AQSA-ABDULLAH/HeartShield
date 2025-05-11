import React, { useState } from "react";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold mb-1">Settings</h2>
      <p className="text-gray-500 mb-8">Manage your account and preferences</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {/* Account Settings */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="text-sm text-red-500 underline cursor-pointer mt-1">
              Change Password
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#2C0000] text-white py-2 rounded-md hover:bg-[#3d0000]"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Preferences */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Preferences</h3>

          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-xs text-gray-500">Receive updates via email</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
              <div
                className={`w-11 h-6 rounded-full ${
                  emailNotifications ? "bg-[#2C0000]" : "bg-gray-300"
                } flex items-center transition-colors`}
              >
                <div
                  className={`h-5 w-5 bg-white rounded-full shadow-md transform duration-300 ${
                    emailNotifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </div>
            </label>
          </div>

          <p className="text-sm mt-6 underline cursor-pointer text-gray-800">
            Privacy Policy
          </p>

          <p className="text-sm text-red-500 mt-10 cursor-pointer">
            Delete Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
