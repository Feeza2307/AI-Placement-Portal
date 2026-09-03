import { useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Applicant",
      message:
        "Rahul Sharma has applied for the Software Engineer position.",
      time: "10 minutes ago",
      icon: "👤",
      read: false,
    },
    {
      id: 2,
      title: "Candidate Shortlisted",
      message:
        "Priya Patil has been shortlisted for the Frontend Developer position.",
      time: "2 hours ago",
      icon: "🤖",
      read: false,
    },
    {
      id: 3,
      title: "Interview Reminder",
      message:
        "You have an interview scheduled with Rahul Sharma tomorrow at 10:00 AM.",
      time: "5 hours ago",
      icon: "📅",
      read: false,
    },
    {
      id: 4,
      title: "New Job Application",
      message:
        "A new candidate has applied for your Backend Developer position.",
      time: "Yesterday",
      icon: "📄",
      read: true,
    },
    {
      id: 5,
      title: "Job Performance",
      message:
        "Your Software Engineer job posting has received 82 applications.",
      time: "2 days ago",
      icon: "📊",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-[#8fa3bf] mt-2">
            Stay updated with your recruitment activities.
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={markAllAsRead}
            className="px-5 py-3 rounded-xl bg-[#6366f1] hover:bg-[#5558e8] text-white font-semibold transition"
          >
            Mark All as Read
          </button>
        )}

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Total Notifications
          </p>

          <p className="text-3xl font-bold mt-2">
            {notifications.length}
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Unread
          </p>

          <p className="text-3xl font-bold mt-2 text-indigo-400">
            {unreadCount}
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Recruitment Updates
          </p>

          <p className="text-lg font-semibold mt-3 text-green-400">
            Active
          </p>

        </div>

      </div>

      {/* Notification List */}
      <div className="max-w-5xl">

        {notifications.length > 0 ? (
          <div className="space-y-4">

            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-[#1d2a40] border rounded-2xl p-5 transition ${
                  notification.read
                    ? "border-[#34445d]"
                    : "border-[#6366f1]/50"
                }`}
              >

                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl ${
                      notification.read
                        ? "bg-[#162238]"
                        : "bg-[#6366f1]/10"
                    }`}
                  >
                    {notification.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                      <div className="flex items-center gap-2">

                        <h3 className="font-semibold">
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                        )}

                      </div>

                      <span className="text-[#64748b] text-xs">
                        {notification.time}
                      </span>

                    </div>

                    <p className="text-[#8fa3bf] text-sm leading-6 mt-2">
                      {notification.message}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 mt-4">

                      {!notification.read && (
                        <button
                          type="button"
                          onClick={() =>
                            markAsRead(notification.id)
                          }
                          className="text-[#a5b4fc] hover:text-white text-xs font-medium transition"
                        >
                          Mark as read
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          deleteNotification(notification.id)
                        }
                        className="text-[#64748b] hover:text-red-400 text-xs font-medium transition"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-12 text-center">

            <div className="text-5xl mb-4">
              🔔
            </div>

            <h2 className="text-xl font-semibold">
              No Notifications
            </h2>

            <p className="text-[#8fa3bf] mt-2">
              You're all caught up!
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Notifications;