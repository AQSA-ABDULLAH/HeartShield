import React from 'react';
import { FaUser } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="bg-white w-auto h-[81.9vh] overflow-y-scroll rounded-br-[10px] md:h-screen ml-[280px]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="p-8 bg-gray-100 w-full min-h-screen">
          <h1 className="text-3xl font-bold mb-8 mx-5">Admin Dashboard</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Total Patients Card */}
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-6 w-72">
              <FaUser className="text-xl transform rotate-90 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Total Patients</p>
                <h2 className="text-2xl font-bold text-[#3b0a00]">2456</h2>
              </div>
            </div>

            {/* Total Doctors Card */}
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-6 w-72">
              <FaUser className="text-xl transform rotate-90 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Total Doctors</p>
                <h2 className="text-2xl font-bold text-[#3b0a00]">186</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
