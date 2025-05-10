import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const DashboardCard = ({ title, description, value, color }) => (
  <div className="bg-white shadow-md rounded-xl p-4 flex-1">
    <p className="text-gray-700 font-semibold mb-2">{title}</p>
    <p className="text-gray-500 text-sm mb-4">{description}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 bg-[#F8F9FA] p-8">
      <h2 className="text-3xl font-bold mb-2">Welcome, Sarah Anderson</h2>
      <p className="text-gray-600 mb-8">Your heart health dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <DashboardCard title="Upload New ECG" description="Get instant AI analysis of your heart health" value="4 uploads this month" color="text-black" />
        <DashboardCard title="View Past Reports" description="Access your complete health history" value="12 total reports" color="text-black" />
        <DashboardCard title="Track Risk Trends" description="Monitor your heart health progress" value={<span className="text-green-600">Low</span>} color="" />
      </div>

      <button className="w-full bg-maroon text-white py-3 rounded-xl font-semibold mb-8">
        Upload ECG & Predict Risk
      </button>

      <div className="bg-white shadow-md rounded-xl p-4">
        <div className="flex justify-between mb-2">
          <h3 className="font-bold">Recent Notifications</h3>
          <span className="text-gray-500 text-sm">Last 7 days</span>
        </div>
        <ul className="list-disc list-inside text-gray-700">
          <li>Dr. Smith reviewed your latest ECG report - High risk factors detected</li>
        </ul>
      </div>
    </main>
  </div>
);

export default Dashboard;


