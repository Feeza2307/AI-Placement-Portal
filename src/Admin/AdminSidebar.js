import { useState } from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Overview", path: "/admin/dashboard", icon: "⌂" },
    { name: "Students", path: "/admin/students", icon: "👨‍🎓" },
    { name: "Companies", path: "/admin/companies", icon: "🏢" },
    { name: "Job Approval", path: "/admin/jobs", icon: "💼" },
    { name: "AI Control", path: "/admin/ai-control", icon: "🤖" },
    { name: "Analytics", path: "/admin/analytics", icon: "📊" },
    { name: "Reports", path: "/admin/reports", icon: "📄" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("adminLogin");

    window.location.href = "/login";
  };

  return (
    <>
      {/* ==================================================
          MOBILE TOP BAR
      ================================================== */}

      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#111827] border-b border-[#263244] z-50 flex items-center justify-between px-4">

        <div className="flex items-center">

          <div className="w-9 h-9 rounded-lg bg-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
            <span className="text-white text-xl">
              ✦
            </span>
          </div>

          <div>
            <h2 className="text-white font-bold text-sm">
              AI Placement
            </h2>

            <p className="text-[#64748b] text-[10px]">
              Admin Panel
            </p>
          </div>

        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-lg bg-[#1d2a40] border border-[#34445d] text-white flex items-center justify-center text-xl hover:bg-[#263244] transition"
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

            <p className="text-[#64748b] text-xs">
              Admin Panel
            </p>
          </div>

        </div>


        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <nav className="flex-1 p-4 overflow-y-auto">

          <p className="text-[#64748b] text-[10px] font-bold uppercase tracking-wider px-3 mb-4">
            Administration
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                      : "text-[#94a3b8] hover:bg-[#1d2a40] hover:text-white"
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
                            : "text-[#94a3b8]"
                        }
                      `}
                    >
                      {item.icon}
                    </span>

                    <span className="font-medium text-sm">
                      {item.name}
                    </span>

                  </>
                )}

              </NavLink>

            ))}

          </div>

        </nav>


        {/* ==================================================
            ADMIN PROFILE
        ================================================== */}

        <div className="px-4 pb-3">

          <div className="flex items-center gap-3 bg-[#1d2a40] border border-[#263244] rounded-xl p-3">

            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">

              <span className="text-white font-bold">
                A
              </span>

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


        {/* ==================================================
            LOGOUT
        ================================================== */}

        <div className="p-4 border-t border-[#263244]">

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#94a3b8] hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
          >

            <span className="text-lg">
              🚪
            </span>

            <span className="text-sm font-medium">
              Logout
            </span>

          </button>

        </div>

      </aside>
    </>
  );
}

export default AdminSidebar;