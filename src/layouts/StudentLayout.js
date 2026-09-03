import { Outlet } from "react-router-dom";
import StudentSidebar from "../Student/StudentSidebar";

function StudentLayout() {
  return (
    <div className="min-h-screen bg-[#101827] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-[#111827] border-r border-[#263244] hidden md:flex flex-col">
        <StudentSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>

    </div>
  );
}

export default StudentLayout;