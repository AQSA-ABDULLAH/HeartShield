  const notifications = [
    {
      id: 1,
      message:
        "Dr. Smith reviewed your latest ECG report - High risk factors detected",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      message: "Your ECG report has been analyzed - Low risk detected",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 3,
      message: "Your ECG report has been analyzed - Low risk detected",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      message: "Your ECG report has been analyzed - Low risk detected",
      time: "3 days ago",
      unread: false,
    },
  ];
  
  const NotificationsPanel = () => {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-1">Your Notifications</h2>
        <p className="text-gray-500 mb-6">
          See important updates from your doctors and system alerts
        </p>
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="bg-gray-100 rounded-xl p-4 shadow-sm hover:bg-gray-200 transition"
            >
              <div className="flex items-start space-x-3">
                <span
                  className={`mt-1 h-3 w-3 rounded-full ${
                    note.unread ? "bg-red-600" : "bg-gray-400"
                  }`}
                ></span>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {note.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{note.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NotificationsPanel;
  