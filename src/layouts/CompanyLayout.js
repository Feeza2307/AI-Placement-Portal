import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function CompanyLayout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Overview",
      icon: "🏠",
      path: "/company/dashboard",
    },
    {
      name: "Company Profile",
      icon: "🏢",
      path: "/company/profile",
    },
    {
      name: "Post Job",
      icon: "➕",
      path: "/company/jobs/post",
    },
    {
      name: "My Jobs",
      icon: "💼",
      path: "/company/jobs",
    },
    {
      name: "Applicants",
      icon: "👥",
      path: "/company/applicants",
    },
    {
      name: "AI Shortlist",
      icon: "🤖",
      path: "/company/ai-shortlist",
    },
    {
      name: "Interview Scheduler",
      icon: "📅",
      path: "/company/interviews",
    },
    {
      name: "Analytics",
      icon: "📊",
      path: "/company/analytics",
    },
    {
      name: "Notifications",
      icon: "🔔",
      path: "/company/notifications",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("companyLogin");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0d1528] flex text-white">

      {/* ==================================================
          MOBILE TOP BAR
      ================================================== */}

      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#111827] border-b border-[#263244] z-50 flex items-center justify-between px-4">

        {/* Mobile Logo */}
        <div className="flex items-center">

          <div className="w-9 h-9 rounded-lg bg-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
            <span className="text-white text-lg">
              ✦
            </span>
          </div>

          <div>
            <h2 className="text-white font-bold text-sm">
              AI Placement
            </h2>

            <p className="text-[#64748b] text-[10px]">
              Company Portal
            </p>
          </div>

        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-lg bg-[#1d2a40] border border-[#34445d] flex items-center justify-center text-white text-xl hover:bg-[#263244] transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ==================================================
          MOBILE OVERLAY
      ================================================== */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
        ></div>
      )}


      {/* ==================================================
          SIDEBAR
      ================================================== */}

      <aside
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          w-64
          h-screen
          bg-[#111827]
          border-r border-[#263244]
          flex flex-col
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <div className="h-20 px-6 flex items-center border-b border-[#263244]">

          <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
            <span className="text-white text-2xl">
              ✦
            </span>
          </div>

          <div>
            <h1 className="text-white font-bold text-lg">
              AI Placement
            </h1>

            <p className="text-[#64748b] text-xs mt-1">
              Company Portal
            </p>
          </div>

        </div>


        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <nav className="flex-1 p-4 overflow-y-auto">

          <p className="text-[#64748b] text-[10px] uppercase font-bold tracking-wider px-3 mb-3">
            Company Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                      : "text-[#8fa3bf] hover:bg-[#1d2a40] hover:text-white"
                  }`
                }
              >

                {({ isActive }) => (
                  <>

                    <span
                      className={`
                        w-6 text-center text-lg
                        transition-transform duration-200
                        group-hover:scale-110
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#8fa3bf]"
                        }
                      `}
                    >
                      {item.icon}
                    </span>

                    <span className="font-medium">
                      {item.name}
                    </span>

                    {/* Notification Badge */}
                    {item.name === "Notifications" && (
                      <span className="ml-auto w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                        3
                      </span>
                    )}

                  </>
                )}

              </NavLink>

            ))}

          </div>

        </nav>


        {/* ==================================================
            COMPANY PROFILE
        ================================================== */}

        <div className="px-4 pb-3">

          <div className="bg-[#1d2a40] border border-[#263244] rounded-xl p-3 flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
              <span className="text-white font-bold">
                C
              </span>
            </div>

            <div className="min-w-0">

              <p className="text-white text-sm font-semibold truncate">
                Company
              </p>

              <p className="text-[#64748b] text-xs truncate">
                Recruiter Account
              </p>

            </div>

          </div>

        </div>


        {/* ==================================================
            LOGOUT
        ================================================== */}

        <div className="p-4 border-t border-[#263244]">

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#8fa3bf] hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 text-sm"
          >

            <span className="text-lg">
              🚪
            </span>

            <span className="font-medium">
              Logout
            </span>

          </button>

        </div>

      </aside>


      {/* ==================================================
          MAIN AREA
      ================================================== */}

      <div className="flex-1 min-w-0">

        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="h-20 bg-[#111827] border-b border-[#263244] flex items-center justify-between px-6 md:px-8 pt-0 lg:pt-0 mt-16 lg:mt-0">

          {/* Header Title */}
          <div>

            <h2 className="text-white font-semibold text-lg">
              Company Dashboard
            </h2>

            <p className="text-[#64748b] text-xs mt-1">
              AI Powered Placement Portal
            </p>

          </div>


          {/* Header Right */}
          <div className="flex items-center gap-4">

            {/* Notification */}
            <button
              onClick={() => navigate("/company/notifications")}
              className="relative w-10 h-10 rounded-xl bg-[#1d2a40] border border-[#34445d] flex items-center justify-center hover:border-indigo-500 hover:bg-[#263244] transition"
            >

              <span className="text-lg">
                🔔
              </span>

              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center">
                3
              </span>

            </button>


            {/* Company Avatar */}
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
              C
            </div>

          </div>

        </header>


        {/* ==================================================
            PAGE CONTENT
        ================================================== */}

        <main className="p-6 md:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default CompanyLayout;