import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

export default function ECGUploader() {
  return (
    <div className="flex max-h-[100vh]">
          <Sidebar />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - File Upload */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold mb-4">Upload Your ECG</h2>
          <p className="text-sm text-gray-500 mb-6">Upload your ECG file and provide clinical information for AI analysis</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg py-16 px-4">
            <div className="flex flex-col items-center">
              <svg
                className="w-10 h-10 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0 0l-3-3m3 3l3-3M12 3v9"
                />
              </svg>
              <p className="text-sm text-gray-600">Drag and drop your ECG file here</p>
              <p className="text-xs text-gray-400 mb-4">Supported formats: .png, .jpg, .mat</p>
              <button className="bg-[#45090B] text-white px-4 py-2 rounded-md hover:bg-[#300607] transition">
                Browse Files
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Clinical Info Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-6">Clinical Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                placeholder="Enter age"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cholesterol Level (mg/dL)</label>
              <input
                type="text"
                placeholder="Enter cholesterol level"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Smoking History</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100">
                <option>Select smoking history</option>
                <option>Never</option>
                <option>Former</option>
                <option>Current</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Pressure (mmHg)</label>
              <input
                type="text"
                placeholder="Enter blood pressure"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
