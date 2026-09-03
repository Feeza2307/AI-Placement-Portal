import { useState } from "react";

function JobApproval() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      type: "Full Time",
      salary: "₹8 - ₹15 LPA",
      applicants: 42,
      status: "Approved",
      posted: "02 Sep 2026",
      description:
        "Looking for a software engineer with strong programming and problem-solving skills.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      type: "Full Time",
      salary: "₹7 - ₹14 LPA",
      applicants: 35,
      status: "Pending",
      posted: "01 Sep 2026",
      description:
        "Frontend developer required to build modern and responsive web applications.",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Infosys",
      location: "Bangalore, India",
      type: "Full Time",
      salary: "₹5 - ₹9 LPA",
      applicants: 28,
      status: "Approved",
      posted: "30 Aug 2026",
      description:
        "Analyze business data and create meaningful reports and dashboards.",
    },
    {
      id: 4,
      title: "Java Developer",
      company: "TCS",
      location: "Pune, India",
      type: "Full Time",
      salary: "₹6 - ₹11 LPA",
      applicants: 19,
      status: "Pending",
      posted: "29 Aug 2026",
      description:
        "Java developer required with knowledge of Spring Boot and database technologies.",
    },
    {
      id: 5,
      title: "Cloud Engineer",
      company: "Amazon",
      location: "Hyderabad, India",
      type: "Full Time",
      salary: "₹9 - ₹17 LPA",
      applicants: 31,
      status: "Approved",
      posted: "27 Aug 2026",
      description:
        "Work with cloud infrastructure and help maintain scalable applications.",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Wipro",
      location: "Bangalore, India",
      type: "Full Time",
      salary: "₹5 - ₹8 LPA",
      applicants: 15,
      status: "Rejected",
      posted: "25 Aug 2026",
      description:
        "Design user-friendly interfaces and collaborate with product teams.",
    },
  ]);

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.location.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateJobStatus = (id, status) => {
    setJobs((currentJobs) =>
      currentJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status,
            }
          : job
      )
    );

    setSelectedJob((current) => {
      if (!current || current.id !== id) {
        return current;
      }

      return {
        ...current,
        status,
      };
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) {
      return;
    }

    setJobs((currentJobs) =>
      currentJobs.filter((job) => job.id !== id)
    );

    setSelectedJob(null);
  };

  const getStatusClass = (status) => {
    if (status === "Approved") {
      return "bg-green-500/10 text-green-400 border border-green-500/20";
    }

    if (status === "Pending") {
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    }

    return "bg-red-500/10 text-red-400 border border-red-500/20";
  };

  const totalJobs = jobs.length;

  const approvedJobs = jobs.filter(
    (job) => job.status === "Approved"
  ).length;

  const pendingJobs = jobs.filter(
    (job) => job.status === "Pending"
  ).length;

  const rejectedJobs = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-8">

      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Job Approval
        </h1>

        <p className="text-[#64748b] mt-1">
          Review, approve and manage job postings submitted by companies.
        </p>
      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {/* TOTAL */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Total Jobs
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalJobs}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
              💼
            </div>

          </div>
        </div>

        {/* APPROVED */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Approved
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-400">
                {approvedJobs}
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
                {pendingJobs}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-2xl">
              ⏳
            </div>

          </div>
        </div>

        {/* REJECTED */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Rejected
              </p>

              <h2 className="text-3xl font-bold mt-2 text-red-400">
                {rejectedJobs}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-2xl">
              ✕
            </div>

          </div>
        </div>

      </div>

      {/* JOB TABLE */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden">

        {/* TABLE TOP */}
        <div className="p-5 border-b border-[#34445d]">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-semibold">
                Job Postings
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                Review and manage job postings from registered companies.
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
                  placeholder="Search jobs..."
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
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>

            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead>

              <tr className="bg-[#162033] border-b border-[#34445d]">

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Job
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Company
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Location
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Type
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Applicants
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Status
                </th>

                <th className="text-right px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-[#34445d]">

              {filteredJobs.length > 0 ? (

                filteredJobs.map((job) => (

                  <tr
                    key={job.id}
                    className="hover:bg-[#223149] transition"
                  >

                    {/* JOB */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                          <span className="text-indigo-400 text-lg">
                            💼
                          </span>
                        </div>

                        <div>

                          <p className="text-white text-sm font-semibold">
                            {job.title}
                          </p>

                          <p className="text-[#64748b] text-xs mt-1">
                            {job.salary}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* COMPANY */}
                    <td className="px-5 py-4">

                      <p className="text-[#cbd5e1] text-sm font-medium">
                        {job.company}
                      </p>

                    </td>

                    {/* LOCATION */}
                    <td className="px-5 py-4">

                      <p className="text-[#94a3b8] text-sm">
                        {job.location}
                      </p>

                    </td>

                    {/* TYPE */}
                    <td className="px-5 py-4">

                      <span className="text-[#cbd5e1] text-sm">
                        {job.type}
                      </span>

                    </td>

                    {/* APPLICANTS */}
                    <td className="px-5 py-4">

                      <span className="text-white text-sm font-medium">
                        {job.applicants}
                      </span>

                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-4">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                          job.status
                        )}`}
                      >
                        {job.status}
                      </span>

                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        {/* VIEW */}
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500 hover:text-white transition"
                        >
                          View
                        </button>

                        {/* APPROVE */}
                        {job.status === "Pending" && (
                          <button
                            onClick={() =>
                              updateJobStatus(
                                job.id,
                                "Approved"
                              )
                            }
                            className="px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium hover:bg-green-500 hover:text-white transition"
                          >
                            Approve
                          </button>
                        )}

                        {/* REJECT */}
                        {job.status === "Pending" && (
                          <button
                            onClick={() =>
                              updateJobStatus(
                                job.id,
                                "Rejected"
                              )
                            }
                            className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500 hover:text-white transition"
                          >
                            Reject
                          </button>
                        )}

                        {/* DELETE */}
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="px-3 py-2 rounded-lg bg-[#111827] border border-[#46566e] text-[#94a3b8] text-xs font-medium hover:text-white hover:border-red-500 transition"
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
                      No jobs found
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
              {filteredJobs.length}
            </span>{" "}

            of{" "}

            <span className="text-white font-medium">
              {jobs.length}
            </span>{" "}

            jobs

          </p>

        </div>

      </div>

      {/* JOB DETAILS MODAL */}
      {selectedJob && (

        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

          <div className="w-full max-w-2xl bg-[#1d2a40] border border-[#34445d] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

            {/* MODAL HEADER */}
            <div className="p-5 border-b border-[#34445d] flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-white">
                  Job Details
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Review complete job posting information
                </p>

              </div>

              <button
                onClick={() => setSelectedJob(null)}
                className="w-9 h-9 rounded-lg bg-[#111827] text-[#94a3b8] hover:text-white transition"
              >
                ✕
              </button>

            </div>

            {/* MODAL BODY */}
            <div className="p-6">

              {/* JOB TITLE */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-xl bg-indigo-500 flex items-center justify-center text-2xl">
                  💼
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {selectedJob.title}
                  </h3>

                  <p className="text-[#94a3b8] text-sm mt-1">
                    {selectedJob.company}
                  </p>

                  <span
                    className={`inline-flex mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      selectedJob.status
                    )}`}
                  >
                    {selectedJob.status}
                  </span>

                </div>

              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Location
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    📍 {selectedJob.location}
                  </p>

                </div>

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Job Type
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedJob.type}
                  </p>

                </div>

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Salary
                  </p>

                  <p className="text-indigo-400 text-sm mt-2 font-bold">
                    {selectedJob.salary}
                  </p>

                </div>

                <div className="bg-[#111827] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Applicants
                  </p>

                  <p className="text-white text-xl mt-2 font-bold">
                    {selectedJob.applicants}
                  </p>

                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="bg-[#111827] rounded-xl p-5 mt-4">

                <p className="text-[#64748b] text-xs">
                  Job Description
                </p>

                <p className="text-[#cbd5e1] text-sm mt-3 leading-6">
                  {selectedJob.description}
                </p>

              </div>

              {/* POSTED DATE */}
              <div className="mt-4">

                <p className="text-[#64748b] text-xs">
                  Posted On
                </p>

                <p className="text-white text-sm mt-2">
                  {selectedJob.posted}
                </p>

              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="p-5 border-t border-[#34445d] flex flex-wrap justify-end gap-3">

              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 rounded-xl bg-[#111827] border border-[#46566e] text-[#cbd5e1] text-sm font-medium hover:text-white transition"
              >
                Close
              </button>

              {selectedJob.status === "Pending" && (
                <>
                  <button
                    onClick={() =>
                      updateJobStatus(
                        selectedJob.id,
                        "Rejected"
                      )
                    }
                    className="px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500 hover:text-white transition"
                  >
                    Reject Job
                  </button>

                  <button
                    onClick={() =>
                      updateJobStatus(
                        selectedJob.id,
                        "Approved"
                      )
                    }
                    className="px-5 py-2.5 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition"
                  >
                    Approve Job
                  </button>
                </>
              )}

              {selectedJob.status === "Approved" && (
                <button
                  onClick={() =>
                    updateJobStatus(
                      selectedJob.id,
                      "Rejected"
                    )
                  }
                  className="px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500 hover:text-white transition"
                >
                  Reject Job
                </button>
              )}

              {selectedJob.status === "Rejected" && (
                <button
                  onClick={() =>
                    updateJobStatus(
                      selectedJob.id,
                      "Approved"
                    )
                  }
                  className="px-5 py-2.5 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition"
                >
                  Approve Job
                </button>
              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default JobApproval;