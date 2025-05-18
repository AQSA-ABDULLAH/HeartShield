import React, { useState } from "react";

export default function SettingsPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-1">Settings</h2>
      <p className="text-sm text-gray-500 mb-6">
        Manage your account and preferences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Account Info */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-4">Account Information</h3>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border mt-1 mb-4 px-3 py-2 rounded-md"
          />

          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border mt-1 mb-4 px-3 py-2 rounded-md"
          />

          <button className="w-full border border-black text-black px-4 py-2 rounded-md mb-4">
            Change Password
          </button>
          <button className="w-full bg-[#330000] text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-4">Preferences</h3>

          <div className="flex items-center justify-between py-2">
            <span>Email Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={emailAlerts}
                onChange={() => setEmailAlerts(!emailAlerts)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#330000] rounded-full peer dark:bg-gray-300 peer-checked:bg-[#330000]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-2">
            <span>Critical Case Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={criticalAlerts}
                onChange={() => setCriticalAlerts(!criticalAlerts)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#330000] rounded-full peer dark:bg-gray-300 peer-checked:bg-[#330000]"></div>
            </label>
          </div>

          <div className="border-t my-4"></div>

          <div className="py-2 text-sm text-[#330000] cursor-pointer hover:underline">
            Privacy Policy
          </div>

          <div className="py-2">
            <button className="border border-red-400 text-red-500 text-sm px-4 py-2 rounded-md">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
