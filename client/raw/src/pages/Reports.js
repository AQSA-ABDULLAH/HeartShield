import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const reports = [
  {
    date: "March 15, 2024",
    time: "9:41 AM",
    risk: "Low Risk",
    color: "bg-green-100 text-green-600",
  },
  {
    date: "February 28, 2024",
    time: "9:41 AM",
    risk: "Medium Risk",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    date: "February 15, 2024",
    time: "9:41 AM",
    risk: "High Risk",
    color: "bg-red-100 text-red-600",
  },
  {
    date: "January 30, 2024",
    time: "9:41 AM",
    risk: "Low Risk",
    color: "bg-green-100 text-green-600",
  },
];

export default function ReportsTable() {
  return (
    <div className="flex max-h-screen">
  <div className="flex-none w-64">
    <Sidebar />
  </div>
  <div className="flex-1 min-h-screen bg-gray-50 p-6 overflow-y-auto">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Your HeartShield Reports
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            View and download your past risk predictions
          </p>

          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-sm text-gray-500 mb-4">
              Showing {reports.length} reports
            </p>
            <div className="divide-y">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <p className="text-gray-800">{report.date}</p>
                    <p className="text-xs text-gray-500">
                      Uploaded at {report.time}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${report.color}`}
                  >
                    {report.risk}
                  </div>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm">
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
