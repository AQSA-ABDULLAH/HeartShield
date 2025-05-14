import React from 'react';
import { FaFileAlt, FaCheck, FaBell, FaSignInAlt } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-[280px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Welcome, Dr. Michael Chen!</h1>
        <p className="text-gray-600 mb-6">Manage and validate patient reports efficiently.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <FaFileAlt className="text-2xl mb-2" />
            <h2 className="font-semibold">Pending Reviews</h2>
            <p className="text-2xl font-bold text-red-900 mt-2">12</p>
            <p className="text-gray-500 text-sm">cases to review</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <FaCheck className="text-2xl mb-2" />
            <h2 className="font-semibold">Approved Reports</h2>
            <p className="text-2xl font-bold text-red-900 mt-2">156</p>
            <p className="text-gray-500 text-sm">total reports</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <FaBell className="text-2xl mb-2" />
            <h2 className="font-semibold">Notifications</h2>
            <p className="text-2xl font-bold text-red-900 mt-2">4</p>
            <p className="text-gray-500 text-sm">unread alerts</p>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800">
          <FaSignInAlt /> Go to Review Cases
        </button>
      </div>
    </div>
  );
} 
