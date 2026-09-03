import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#101827] text-white">

      <main className="min-h-screen">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;