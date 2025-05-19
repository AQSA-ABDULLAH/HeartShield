import React from "react";
import { ArrowLeft } from "lucide-react";

export default function CaseDetails() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-[280px]">
      <button className="flex items-center text-sm text-black mb-4">
        <ArrowLeft className="mr-1 w-4 h-4" /> Back to Cases
      </button>

      <h2 className="text-2xl font-bold mb-4">Review Case Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Patient Info + ECG */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400 text-xl rounded-md mb-4">
            ECG Recording
          </div>
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <div>
              <p className="text-gray-500">Patient Name</p>
              <p className="font-medium">Sarah Johnson</p>
            </div>
            <div>
              <p className="text-gray-500">Age</p>
              <p className="font-medium">54</p>
            </div>
            <div>
              <p className="text-gray-500">Gender</p>
              <p className="font-medium">Female</p>
            </div>
            <div>
              <p className="text-gray-500">Cholesterol</p>
              <p className="font-medium">240 mg/dL</p>
            </div>
            <div>
              <p className="text-gray-500">Smoking History</p>
              <p className="font-medium">20 pack years</p>
            </div>
            <div>
              <p className="text-gray-500">Blood Pressure</p>
              <p className="font-medium">140/90 mmHg</p>
            </div>
          </div>
        </div>

        {/* AI Risk Assessment */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-base font-semibold mb-3">AI Risk Assessment</h3>
          <div className="flex space-x-2 mb-4">
            <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">High Risk</button>
            <button className="border border-green-500 text-green-700 px-4 py-1 rounded-full text-sm">Low Risk</button>
          </div>
          <label className="block text-sm font-medium mb-1">
            Medical Notes & Recommendations
          </label>
          <textarea
            className="w-full h-32 border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter notes here..."
          />
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Approve and Send to Patient
          </button>
        </div>
      </div>
    </div>
  );
}
