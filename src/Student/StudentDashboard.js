import StudentSidebar from "./StudentSidebar";
import StudentOverview from "./StudentOverview";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#0d1528] flex">

      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 min-w-0">

        {/* Top Bar */}
        <header className="h-20 border-b border-[#263244] bg-[#111827] flex items-center justify-between px-6">

          <div>
            <h2 className="text-white font-semibold text-lg">
              Student Dashboard
            </h2>

            <p className="text-[#64748b] text-xs">
              AI Powered Placement Portal
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <div className="relative">

              <button className="w-10 h-10 rounded-xl bg-[#1d2a40] border border-[#34445d] text-[#94a3b8]">
                🔔
              </button>

              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center">
                3
              </span>

            </div>

            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              S
            </div>

          </div>

        </header>

        {/* Page */}
        <div className="p-6 md:p-8">

          <StudentOverview />

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;