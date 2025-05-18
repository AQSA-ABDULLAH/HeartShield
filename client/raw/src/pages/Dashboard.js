import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const DashboardCard = ({ icon, title, description, value, color = 'text-black', value_details }) => (
  <div className="bg-[#fff] w-full h-[265px] rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center p-4">
    <img src={icon} alt="icon" className="w-8 h-8 mb-4" />
    <p className="text-[#000000] text-[20px] font-semibold mb-2 text-center">{title}</p>
    <p className="text-[#666666] text-[14px] mb-2 text-center">{description}</p>
    <p className={`text-[#2D0101] text-[24px] mb-4 font-bold ${color}`}>{value}</p>
    <p className="text-[#666666] text-[14px] text-center">{value_details}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex max-h-[100vh]">
      <Sidebar />
      <main className="flex-1 bg-[#F8F9FA] px-[32px] py-[20px]">
        <h2 className="text-[32px] text-[#111111] font-bold mb-2">Welcome, Sarah Anderson</h2>
        <p className="text-[16px] text-[#666666] mb-8">Your heart health dashboard</p>

        <div className="flex gap-8 mb-8">
          <DashboardCard
            icon="/assest/upload-icon.png"
            title="Upload New ECG"
            description="Get instant AI analysis of your heart health"
            value="4"
            value_details="uploads this month"
          />
          <DashboardCard
            icon="/assest/report-icon.png"
            title="View Past Reports"
            description="Access your complete health history"
            value="12"
            value_details="total reports"
          />
          <DashboardCard
            icon="/assest/analytics-icon.png"
            title="Track Risk Trends"
            description="Monitor your heart health progress"
            value={<span className="text-[#10B981]">Low</span>}
            value_details="current risk level"
          />
        </div>

        <button className="w-full bg-[#2D0101] h-[75px] text-[#fff] rounded-xl text-[18px] font-semibold mb-8 flex items-center justify-center gap-5 tracking-[0.8px]">
          <img src='/assest/white-upload-icon.png' alt='icon' />
          <p>Upload ECG & Predict Risk</p> 
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
};

export default Dashboard;



