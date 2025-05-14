import React from "react";

const notifications = [
  {
    message: "High-risk patient case requires immediate review - Sarah Johnson",
    time: "5 min ago",
    isNew: true
  },
  {
    message: "Risk assessment completed for Michael Chen",
    time: "1 hour ago",
    isNew: true
  },
  {
    message: "New patient data uploaded for review – Emma Davis",
    time: "2 hours ago",
    isNew: false
  },
  {
    message: "Monthly patient risk statistics report available",
    time: "3 hours ago",
    isNew: false
  },
  {
    message: "System maintenance scheduled for tonight at 2 AM EST",
    time: "5 hours ago",
    isNew: false
  }
];

export default function NotificationsPanel() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <p className="text-sm text-gray-500 mb-4">
          Updates and messages regarding patient cases.
        </p>
        <div className="space-y-4">
          {notifications.map((note, i) => (
            <div
              key={i}
              className="bg-white px-4 py-3 rounded-xl shadow flex items-start justify-between"
            >
              <div className="flex items-start space-x-2">
                <span
                  className={`w-2 h-2 mt-1 rounded-full ${
                    note.isNew ? "bg-red-500" : "bg-gray-300"
                  }`}
                ></span>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {note.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{note.time}</p>
                </div>
              </div>
              {note.isNew && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
