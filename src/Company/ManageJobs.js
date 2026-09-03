import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedJobs = localStorage.getItem("companyJobs");

    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);

    setJobs(updatedJobs);
    localStorage.setItem("companyJobs", JSON.stringify(updatedJobs));
  };

  const filteredJobs = jobs.filter((job) => {
    const title = job.title || "";
    const company = job.company || "";

    return (
      title.toLowerCase().includes(search.toLowerCase()) ||
      company.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            My Jobs
          </h1>

          <p className="text-[#8fa1bd] mt-2">
            Manage and track all your job postings.
          </p>
        </div>

        <Link
          to="/company/jobs/post"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition text-center"
        >
          + Post New Job
        </Link>

      </div>

      {/* Search */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 mb-7">

        <input
          type="text"
          placeholder="Search jobs by title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#71809c] outline-none focus:border-indigo-500"
        />

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">Total Jobs</p>
          <h2 className="text-3xl font-bold mt-2">
            {jobs.length}
          </h2>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">Active Jobs</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            {jobs.length}
          </h2>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">Applicants</p>
          <h2 className="text-3xl font-bold text-indigo-400 mt-2">
            0
          </h2>
        </div>

      </div>

      {/* Jobs */}
      {filteredJobs.length === 0 ? (

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-12 text-center">

          <div className="text-5xl mb-4">
            💼
          </div>

          <h2 className="text-2xl font-bold mb-2">
            No jobs found
          </h2>

          <p className="text-[#8fa1bd] mb-6">
            You haven't posted any jobs yet.
          </p>

          <Link
            to="/company/jobs/post"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Post Your First Job
          </Link>

        </div>

      ) : (

        <div className="space-y-5">

          {filteredJobs.map((job, index) => (

            <div
              key={index}
              className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-indigo-500/50 transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                {/* Job Information */}
                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <h2 className="text-xl font-bold">
                      {job.title || "Untitled Job"}
                    </h2>

                    <span className="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
                      Active
                    </span>

                  </div>

                  <p className="text-[#8fa1bd] mb-4">
                    {job.company || "Company"}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-[#a7b2c5]">

                    {job.location && (
                      <span>
                        📍 {job.location}
                      </span>
                    )}

                    {job.type && (
                      <span>
                        💼 {job.type}
                      </span>
                    )}

                    {job.workMode && (
                      <span>
                        🏢 {job.workMode}
                      </span>
                    )}

                  </div>

                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">

                  <button
                    className="px-5 py-2.5 rounded-xl border border-[#46566e] text-white hover:bg-[#263650] transition"
                  >
                    View Details
                  </button>

                  <button
                    className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="px-5 py-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default ManageJobs;