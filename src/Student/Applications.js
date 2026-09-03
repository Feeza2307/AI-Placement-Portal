import { useState } from "react";

function Applications() {
  const [filter, setFilter] = useState("All");

  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore, India",
      appliedDate: "August 5, 2026",
      status: "Shortlisted",
      type: "Full Time",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Developer",
      location: "Hyderabad, India",
      appliedDate: "August 3, 2026",
      status: "Under Review",
      type: "Full Time",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Graduate Software Developer",
      location: "Bangalore, India",
      appliedDate: "July 30, 2026",
      status: "Interview",
      type: "Full Time",
    },
    {
      id: 4,
      company: "Infosys",
      role: "System Engineer",
      location: "Pune, India",
      appliedDate: "July 27, 2026",
      status: "Applied",
      type: "Full Time",
    },
  ];

  const filteredApplications =
    filter === "All"
      ? applications
      : applications.filter(
          (application) => application.status === filter
        );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Shortlisted":
        return "bg-green-500/10 text-green-400 border-green-500/20";

      case "Interview":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";

      case "Under Review":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

      case "Rejected":
        return "bg-red-500/10 text-red-400 border-red-500/20";

      default:
        return "bg-[#6366f1]/10 text-[#a5b4fc] border-[#6366f1]/20";
    }
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Applications
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Track your job applications and recruitment progress.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Total Applications
          </p>

          <p className="text-3xl font-bold mt-2">
            {applications.length}
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Under Review
          </p>

          <p className="text-3xl font-bold mt-2">
            {
              applications.filter(
                (item) => item.status === "Under Review"
              ).length
            }
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Shortlisted
          </p>

          <p className="text-3xl font-bold mt-2">
            {
              applications.filter(
                (item) => item.status === "Shortlisted"
              ).length
            }
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Interviews
          </p>

          <p className="text-3xl font-bold mt-2">
            {
              applications.filter(
                (item) => item.status === "Interview"
              ).length
            }
          </p>
        </div>

      </div>

      {/* Filter */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 mb-6">

        <div className="flex flex-wrap gap-3">

          {[
            "All",
            "Applied",
            "Under Review",
            "Shortlisted",
            "Interview",
            "Rejected",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                filter === item
                  ? "bg-[#6366f1] text-white"
                  : "bg-[#162238] text-[#8fa3bf] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Applications */}
      <div className="space-y-5">

        {filteredApplications.map((application) => (
          <div
            key={application.id}
            className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-[#6366f1]/50 transition"
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              {/* Company */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-xl font-bold text-[#a5b4fc]">
                  {application.company.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    {application.role}
                  </h2>

                  <p className="text-[#8fa3bf] text-sm mt-1">
                    {application.company}
                  </p>

                  <p className="text-[#64748b] text-sm mt-1">
                    📍 {application.location}
                  </p>
                </div>

              </div>

              {/* Status */}
              <div>
                <span
                  className={`inline-flex px-4 py-2 rounded-xl border text-sm font-medium ${getStatusStyle(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>
              </div>

            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

              <div className="bg-[#162238] rounded-xl p-4">
                <p className="text-[#64748b] text-xs">
                  Application Date
                </p>

                <p className="text-sm font-medium mt-1">
                  {application.appliedDate}
                </p>
              </div>

              <div className="bg-[#162238] rounded-xl p-4">
                <p className="text-[#64748b] text-xs">
                  Job Type
                </p>

                <p className="text-sm font-medium mt-1">
                  {application.type}
                </p>
              </div>

              <div className="bg-[#162238] rounded-xl p-4">
                <p className="text-[#64748b] text-xs">
                  Current Status
                </p>

                <p className="text-sm font-medium mt-1">
                  {application.status}
                </p>
              </div>

            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-5 pt-5 border-t border-[#34445d]">

              <button
                type="button"
                className="px-5 py-2.5 rounded-xl border border-[#46566e] text-white hover:bg-[#162238] transition text-sm"
              >
                View Job
              </button>

              <button
                type="button"
                className="px-5 py-2.5 rounded-xl bg-[#6366f1] hover:bg-[#5558e8] text-white font-semibold transition text-sm"
              >
                View Application
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Empty State */}
      {filteredApplications.length === 0 && (
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-12 text-center">

          <div className="text-5xl mb-4">
            📋
          </div>

          <h2 className="text-xl font-semibold">
            No Applications Found
          </h2>

          <p className="text-[#8fa3bf] mt-2">
            There are no applications with this status.
          </p>

        </div>
      )}

    </div>
  );
}

export default Applications;