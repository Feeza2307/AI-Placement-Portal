import { useState } from "react";

function Companies() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Google",
      email: "careers@google.com",
      industry: "Technology",
      location: "Bangalore, India",
      jobs: 24,
      status: "Active",
      joined: "01 Sep 2026",
    },
    {
      id: 2,
      name: "Microsoft",
      email: "careers@microsoft.com",
      industry: "Software",
      location: "Hyderabad, India",
      jobs: 18,
      status: "Active",
      joined: "30 Aug 2026",
    },
    {
      id: 3,
      name: "Infosys",
      email: "careers@infosys.com",
      industry: "IT Services",
      location: "Bangalore, India",
      jobs: 32,
      status: "Active",
      joined: "28 Aug 2026",
    },
    {
      id: 4,
      name: "TCS",
      email: "careers@tcs.com",
      industry: "IT Services",
      location: "Mumbai, India",
      jobs: 27,
      status: "Pending",
      joined: "26 Aug 2026",
    },
    {
      id: 5,
      name: "Amazon",
      email: "careers@amazon.com",
      industry: "E-Commerce",
      location: "Hyderabad, India",
      jobs: 21,
      status: "Active",
      joined: "24 Aug 2026",
    },
    {
      id: 6,
      name: "Wipro",
      email: "careers@wipro.com",
      industry: "IT Services",
      location: "Bangalore, India",
      jobs: 15,
      status: "Inactive",
      joined: "20 Aug 2026",
    },
  ]);

  const filteredCompanies = companies.filter((company) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      company.name.toLowerCase().includes(searchText) ||
      company.email.toLowerCase().includes(searchText) ||
      company.industry.toLowerCase().includes(searchText) ||
      company.location.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || company.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id) => {
    setCompanies((currentCompanies) =>
      currentCompanies.map((company) =>
        company.id === id
          ? {
              ...company,
              status:
                company.status === "Active" ? "Inactive" : "Active",
            }
          : company
      )
    );

    setSelectedCompany((current) => {
      if (!current || current.id !== id) return current;

      return {
        ...current,
        status:
          current.status === "Active" ? "Inactive" : "Active",
      };
    });
  };

  const handleApprove = (id) => {
    setCompanies((currentCompanies) =>
      currentCompanies.map((company) =>
        company.id === id
          ? {
              ...company,
              status: "Active",
            }
          : company
      )
    );

    setSelectedCompany((current) => {
      if (!current || current.id !== id) return current;

      return {
        ...current,
        status: "Active",
      };
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this company?"
    );

    if (!confirmDelete) return;

    setCompanies((currentCompanies) =>
      currentCompanies.filter((company) => company.id !== id)
    );

    setSelectedCompany(null);
  };

  const getStatusClass = (status) => {
    if (status === "Active") {
      return "bg-green-500/10 text-green-400 border border-green-500/20";
    }

    if (status === "Pending") {
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    }

    return "bg-red-500/10 text-red-400 border border-red-500/20";
  };

  const totalCompanies = companies.length;

  const activeCompanies = companies.filter(
    (company) => company.status === "Active"
  ).length;

  const pendingCompanies = companies.filter(
    (company) => company.status === "Pending"
  ).length;

  const inactiveCompanies = companies.filter(
    (company) => company.status === "Inactive"
  ).length;

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Companies Management
        </h1>

        <p className="text-[#64748b] mt-1">
          Manage registered companies and monitor their recruitment activity.
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {/* TOTAL */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Total Companies
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalCompanies}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
              🏢
            </div>

          </div>
        </div>

        {/* ACTIVE */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Active Companies
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-400">
                {activeCompanies}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl">
              ✓
            </div>

          </div>
        </div>

        {/* PENDING */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-bold mt-2 text-yellow-400">
                {pendingCompanies}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-2xl">
              ⏳
            </div>

          </div>
        </div>

        {/* INACTIVE */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Inactive
              </p>

              <h2 className="text-3xl font-bold mt-2 text-red-400">
                {inactiveCompanies}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-2xl">
              !
            </div>

          </div>
        </div>

      </div>

      {/* COMPANY TABLE */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden">

        {/* TABLE HEADER */}
        <div className="p-5 border-b border-[#34445d]">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-semibold">
                Registered Companies
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                View and manage all companies registered on the portal.
              </p>
            </div>

            {/* SEARCH + FILTER */}
            <div className="flex flex-col sm:flex-row gap-3">

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search companies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:w-64 h-11 bg-[#111827] border border-[#46566e] rounded-xl pl-11 pr-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500"
                />

              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-11 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>

            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>
              <tr className="bg-[#162033] border-b border-[#34445d]">

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Company
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Industry
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Location
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Jobs
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Status
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Joined
                </th>

                <th className="text-right px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-[#34445d]">

              {filteredCompanies.length > 0 ? (

                filteredCompanies.map((company) => (

                  <tr
                    key={company.id}
                    className="hover:bg-[#223149] transition"
                  >

                    {/* COMPANY */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                          <span className="text-indigo-400 font-bold">
                            {company.name.charAt(0)}
                          </span>
                        </div>

                        <div>

                          <p className="text-white text-sm font-semibold">
                            {company.name}
                          </p>

                          <p className="text-[#64748b] text-xs mt-1">
                            {company.email}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* INDUSTRY */}
                    <td className="px-5 py-4">
                      <p className="text-[#cbd5e1] text-sm">
                        {company.industry}
                      </p>
                    </td>

                    {/* LOCATION */}
                    <td className="px-5 py-4">
                      <p className="text-[#94a3b8] text-sm">
                        {company.location}
                      </p>
                    </td>

                    {/* JOBS */}
                    <td className="px-5 py-4">
                      <span className="text-white text-sm font-medium">
                        {company.jobs}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-4">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                          company.status
                        )}`}
                      >
                        {company.status}
                      </span>

                    </td>

                    {/* JOINED */}
                    <td className="px-5 py-4">
                      <span className="text-[#94a3b8] text-sm">
                        {company.joined}
                      </span>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        {/* VIEW */}
                        <button
                          onClick={() => setSelectedCompany(company)}
                          className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500 hover:text-white transition"
                        >
                          View
                        </button>

                        {/* APPROVE */}
                        {company.status === "Pending" && (
                          <button
                            onClick={() => handleApprove(company.id)}
                            className="px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium hover:bg-green-500 hover:text-white transition"
                          >
                            Approve
                          </button>
                        )}

                        {/* ACTIVATE / DEACTIVATE */}
                        <button
                          onClick={() =>
                            handleStatusChange(company.id)
                          }
                          className="px-3 py-2 rounded-lg bg-[#111827] border border-[#46566e] text-[#94a3b8] text-xs font-medium hover:text-white hover:border-indigo-500 transition"
                        >
                          {company.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>

                        {/* DELETE */}
                        <button
                          onClick={() => handleDelete(company.id)}
                          className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500 hover:text-white transition"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center"
                  >

                    <div className="text-4xl mb-3">
                      🔍
                    </div>

                    <p className="text-white font-medium">
                      No companies found
                    </p>

                    <p className="text-[#64748b] text-sm mt-1">
                      Try changing your search or filter.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}
        <div className="px-5 py-4 border-t border-[#34445d]">

          <p className="text-[#64748b] text-sm">

            Showing{" "}

            <span className="text-white font-medium">
              {filteredCompanies.length}
            </span>{" "}

            of{" "}

            <span className="text-white font-medium">
              {companies.length}
            </span>{" "}

            companies

          </p>

        </div>

      </div>

      {/* COMPANY DETAILS MODAL */}
      {selectedCompany && (

        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

          <div className="w-full max-w-lg bg-[#1d2a40] border border-[#34445d] rounded-2xl shadow-2xl">

            {/* MODAL HEADER */}
            <div className="p-5 border-b border-[#34445d] flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-white">
                  Company Details
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Company profile information
                </p>

              </div>

              <button
                onClick={() => setSelectedCompany(null)}
                className="w-9 h-9 rounded-lg bg-[#111827] text-[#94a3b8] hover:text-white transition"
              >
                ✕
              </button>

            </div>

            {/* MODAL BODY */}
            <div className="p-6">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-xl bg-indigo-500 flex items-center justify-center text-2xl font-bold">
                  {selectedCompany.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    {selectedCompany.name}
                  </h3>

                  <p className="text-[#64748b] text-sm">
                    {selectedCompany.email}
                  </p>

                  <span
                    className={`inline-flex mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      selectedCompany.status
                    )}`}
                  >
                    {selectedCompany.status}
                  </span>

                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Industry
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedCompany.industry}
                  </p>

                </div>

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Location
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedCompany.location}
                  </p>

                </div>

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Posted Jobs
                  </p>

                  <p className="text-indigo-400 text-xl mt-2 font-bold">
                    {selectedCompany.jobs}
                  </p>

                </div>

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Joined
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedCompany.joined}
                  </p>

                </div>

              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="p-5 border-t border-[#34445d] flex justify-end gap-3">

              <button
                onClick={() => setSelectedCompany(null)}
                className="px-5 py-2.5 rounded-xl bg-[#111827] border border-[#46566e] text-[#cbd5e1] text-sm font-medium hover:text-white transition"
              >
                Close
              </button>

              {selectedCompany.status === "Pending" && (
                <button
                  onClick={() =>
                    handleApprove(selectedCompany.id)
                  }
                  className="px-5 py-2.5 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition"
                >
                  Approve Company
                </button>
              )}

              <button
                onClick={() =>
                  handleStatusChange(selectedCompany.id)
                }
                className="px-5 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
              >
                {selectedCompany.status === "Active"
                  ? "Deactivate"
                  : "Activate"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Companies;