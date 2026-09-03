import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Applicants() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const applicants = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      job: "Software Engineer",
      skills: "React, JavaScript, Node.js",
      score: 92,
      status: "Shortlisted",
      date: "09 Aug 2026",
    },
    {
      id: 2,
      name: "Priya Patil",
      email: "priya@example.com",
      job: "Frontend Developer",
      skills: "React, HTML, CSS",
      score: 88,
      status: "Under Review",
      date: "08 Aug 2026",
    },
    {
      id: 3,
      name: "Arjun Kumar",
      email: "arjun@example.com",
      job: "Software Engineer",
      skills: "Python, Django, SQL",
      score: 76,
      status: "Under Review",
      date: "08 Aug 2026",
    },
    {
      id: 4,
      name: "Sneha Joshi",
      email: "sneha@example.com",
      job: "Data Analyst",
      skills: "Python, Excel, SQL",
      score: 69,
      status: "Rejected",
      date: "07 Aug 2026",
    },
  ];

  const filteredApplicants = applicants.filter((applicant) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      applicant.name.toLowerCase().includes(searchText) ||
      applicant.job.toLowerCase().includes(searchText) ||
      applicant.skills.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || applicant.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-10">

      {/* ================= HEADER ================= */}

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Applicants
        </h1>

        <p className="text-[#8fa1bd] mt-2">
          Review candidates and manage applications.
        </p>
      </div>

      {/* ================= STATISTICS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">
            Total Applicants
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {applicants.length}
          </h2>
        </div>

        {/* Shortlisted */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">
            Shortlisted
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-2">
            {
              applicants.filter(
                (a) => a.status === "Shortlisted"
              ).length
            }
          </h2>
        </div>

        {/* Under Review */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">
            Under Review
          </p>

          <h2 className="text-3xl font-bold text-yellow-400 mt-2">
            {
              applicants.filter(
                (a) => a.status === "Under Review"
              ).length
            }
          </h2>
        </div>

        {/* Average AI Score */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa1bd]">
            Average AI Score
          </p>

          <h2 className="text-3xl font-bold text-indigo-400 mt-2">
            {Math.round(
              applicants.reduce(
                (sum, applicant) =>
                  sum + applicant.score,
                0
              ) / applicants.length
            )}
            %
          </h2>
        </div>

      </div>

      {/* ================= SEARCH & FILTER ================= */}

      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 mb-7">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search candidates..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="md:col-span-2 h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#71809c] outline-none focus:border-indigo-500"
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
          >
            <option value="All">
              All Status
            </option>

            <option value="Shortlisted">
              Shortlisted
            </option>

            <option value="Under Review">
              Under Review
            </option>

            <option value="Rejected">
              Rejected
            </option>
          </select>

        </div>

      </div>

      {/* ================= APPLICANTS ================= */}

      <div className="space-y-5">

        {filteredApplicants.length === 0 ? (

          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-12 text-center">

            <div className="text-5xl mb-4">
              👥
            </div>

            <h2 className="text-2xl font-bold">
              No applicants found
            </h2>

            <p className="text-[#8fa1bd] mt-2">
              Try changing your search or filter.
            </p>

          </div>

        ) : (

          filteredApplicants.map((applicant) => (

            <div
              key={applicant.id}
              className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-indigo-500/50 transition"
            >

              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                {/* ================= CANDIDATE ================= */}

                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold">
                    {applicant.name.charAt(0)}
                  </div>

                  <div>

                    <h2 className="text-xl font-bold">
                      {applicant.name}
                    </h2>

                    <p className="text-[#8fa1bd] text-sm">
                      {applicant.email}
                    </p>

                    <p className="text-white mt-2">
                      {applicant.job}
                    </p>

                    <p className="text-[#8fa1bd] text-sm mt-1">
                      {applicant.skills}
                    </p>

                  </div>

                </div>

                {/* ================= AI SCORE ================= */}

                <div className="text-center">

                  <p className="text-[#8fa1bd] text-sm">
                    AI Match
                  </p>

                  <div className="text-3xl font-bold text-indigo-400">
                    {applicant.score}%
                  </div>

                </div>

                {/* ================= STATUS ================= */}

                <div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      applicant.status ===
                      "Shortlisted"
                        ? "bg-green-500/10 text-green-400"
                        : applicant.status ===
                          "Rejected"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {applicant.status}
                  </span>

                  <p className="text-[#71809c] text-xs mt-3">
                    Applied {applicant.date}
                  </p>

                </div>

                {/* ================= ACTIONS ================= */}

                <div className="flex flex-wrap gap-3">

                  {/* VIEW */}
                  <button
                    onClick={() =>
                      navigate(
                        `/company/applicants/${applicant.id}`
                      )
                    }
                    className="px-4 py-2.5 rounded-xl border border-[#46566e] text-white hover:bg-[#263650] transition"
                  >
                    View
                  </button>

                  {/* SHORTLIST */}
                  <button
                    className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition"
                  >
                    Shortlist
                  </button>

                  {/* REJECT */}
                  <button
                    className="px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition"
                  >
                    Reject
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Applicants;