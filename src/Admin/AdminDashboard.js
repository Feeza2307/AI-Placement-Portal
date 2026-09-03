import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminOverview from "./AdminOverview";

function AdminDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New company registered",
      message: "Infosys has submitted a registration request.",
      time: "5 min ago",
    },
    {
      id: 2,
      title: "Job approval required",
      message: "A new job posting is waiting for approval.",
      time: "20 min ago",
    },
    {
      id: 3,
      title: "New student registered",
      message: "A new student has joined the placement portal.",
      time: "1 hour ago",
    },
    {
      id: 4,
      title: "AI analysis completed",
      message: "Resume analysis process completed successfully.",
      time: "2 hours ago",
    },
    {
      id: 5,
      title: "Interview scheduled",
      message: "A company has scheduled a candidate interview.",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#101827] text-white flex">

      {/* ==================================================
          SIDEBAR
      ================================================== */}

      <AdminSidebar />


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="flex-1 min-w-0 pt-16 lg:pt-0">

        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="h-20 border-b border-[#263244] bg-[#111827] flex items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Left Section */}

          <div className="min-w-0">

            <div className="flex items-center gap-2">

              <h2 className="text-white font-semibold text-base sm:text-lg truncate">
                Admin Dashboard
              </h2>

              <span className="hidden sm:inline-flex px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-semibold uppercase">
                Admin
              </span>

            </div>

            <p className="text-[#64748b] text-xs mt-1 truncate">
              AI Powered Placement Portal
            </p>

          </div>


          {/* Right Section */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/* ==================================================
                NOTIFICATION
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfile(false);
                }}
                className={`relative w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                  showNotifications
                    ? "bg-indigo-500/10 border-indigo-500/40 text-white"
                    : "bg-[#1d2a40] border-[#34445d] text-[#94a3b8] hover:text-white hover:bg-[#263244]"
                }`}
                aria-label="Notifications"
              >
                <span className="text-lg">
                  🔔
                </span>

                {/* Notification Badge */}

                <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-red-500 rounded-full text-[9px] text-white font-bold flex items-center justify-center border-2 border-[#111827]">
                  5
                </span>

              </button>


              {/* Notification Dropdown */}

              {showNotifications && (
                <div className="absolute right-0 top-12 w-[320px] sm:w-[360px] bg-[#111827] border border-[#263244] rounded-2xl shadow-2xl shadow-black/30 overflow-hidden z-50">

                  {/* Dropdown Header */}

                  <div className="px-4 py-4 border-b border-[#263244] flex items-center justify-between">

                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        Notifications
                      </h3>

                      <p className="text-[#64748b] text-xs mt-1">
                        You have 5 new notifications
                      </p>
                    </div>

                    <span className="px-2 py-1 rounded-lg bg-red-500/10 text-red-400 text-[10px] font-semibold">
                      5 New
                    </span>

                  </div>


                  {/* Notifications */}

                  <div className="max-h-[350px] overflow-y-auto">

                    {notifications.map((notification) => (

                      <div
                        key={notification.id}
                        className="px-4 py-3 border-b border-[#263244] hover:bg-[#1d2a40] transition cursor-pointer"
                      >

                        <div className="flex gap-3">

                          <div className="w-9 h-9 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                            <span className="text-sm">
                              🔔
                            </span>
                          </div>

                          <div className="min-w-0">

                            <p className="text-white text-xs font-semibold">
                              {notification.title}
                            </p>

                            <p className="text-[#64748b] text-[11px] mt-1 leading-relaxed">
                              {notification.message}
                            </p>

                            <p className="text-indigo-400 text-[10px] mt-1">
                              {notification.time}
                            </p>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>


                  {/* Footer */}

                  <div className="p-3">

                    <NavLink
                      to="/admin/reports"
                      onClick={() => setShowNotifications(false)}
                      className="block text-center py-2 rounded-lg bg-[#1d2a40] hover:bg-[#263244] text-indigo-400 hover:text-indigo-300 text-xs font-medium transition"
                    >
                      View All Notifications
                    </NavLink>

                  </div>

                </div>
              )}

            </div>


            {/* ==================================================
                ADMIN PROFILE
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 sm:gap-3 group"
              >

                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  A
                </div>

                <div className="hidden md:block text-left">

                  <p className="text-white text-sm font-semibold">
                    Administrator
                  </p>

                  <p className="text-[#64748b] text-[10px]">
                    System Admin
                  </p>

                </div>

                <span className="hidden md:block text-[#64748b] text-xs">
                  ▾
                </span>

              </button>


              {/* Profile Dropdown */}

              {showProfile && (
                <div className="absolute right-0 top-12 w-56 bg-[#111827] border border-[#263244] rounded-2xl shadow-2xl shadow-black/30 overflow-hidden z-50">

                  {/* Profile Header */}

                  <div className="p-4 border-b border-[#263244]">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                        A
                      </div>

                      <div className="min-w-0">

                        <p className="text-white text-sm font-semibold truncate">
                          Administrator
                        </p>

                        <p className="text-[#64748b] text-xs truncate">
                          System Admin
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Menu */}

                  <div className="p-2">

                    <NavLink
                      to="/admin/dashboard"
                      onClick={() => setShowProfile(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#94a3b8] hover:bg-[#1d2a40] hover:text-white transition text-xs"
                    >
                      <span>⌂</span>
                      Dashboard
                    </NavLink>

                    <NavLink
                      to="/admin/analytics"
                      onClick={() => setShowProfile(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#94a3b8] hover:bg-[#1d2a40] hover:text-white transition text-xs"
                    >
                      <span>📊</span>
                      Analytics
                    </NavLink>

                    <button
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("userRole");
                        localStorage.removeItem("adminLogin");

                        window.location.href = "/login";
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#94a3b8] hover:bg-red-500/10 hover:text-red-400 transition text-xs"
                    >
                      <span>🚪</span>
                      Logout
                    </button>

                  </div>

                </div>
              )}

            </div>

          </div>

        </header>


        {/* ==================================================
            DASHBOARD CONTENT
        ================================================== */}

        <div className="p-4 sm:p-6 lg:p-8">

          <AdminOverview />

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;