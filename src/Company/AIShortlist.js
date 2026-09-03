import { useState } from "react";

function AIShortlist() {
  const [selectedJob, setSelectedJob] = useState("Software Engineer");
  const [minScore, setMinScore] = useState(70);

  const candidates = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      skills: ["React", "Node.js", "MongoDB"],
      score: 94,
      experience: "Fresher",
      education: "B.E. Computer Science",
      status: "Highly Recommended",
    },
    {
      id: 2,
      name: "Priya Patil",
      email: "priya@example.com",
      skills: ["Java", "Spring Boot", "MySQL"],
      score: 88,
      experience: "1 Year",
      education: "B.E. Computer Science",
      status: "Recommended",
    },
    {
      id: 3,
      name: "Aman Kulkarni",
      email: "aman@example.com",
      skills: ["Python", "Django", "SQL"],
      score: 82,
      experience: "Fresher",
      education: "B.E. Information Science",
      status: "Recommended",
    },
    {
      id: 4,
      name: "Sneha Desai",
      email: "sneha@example.com",
      skills: ["JavaScript", "React", "Firebase"],
      score: 76,
      experience: "Fresher",
      education: "B.E. Computer Science",
      status: "Potential Match",
    },
    {
      id: 5,
      name: "Arjun Joshi",
      email: "arjun@example.com",
      skills: ["C++", "DSA", "Java"],
      score: 64,
      experience: "Fresher",
      education: "B.E. Computer Science",
      status: "Low Match",
    },
  ];

  const shortlistedCandidates = candidates.filter(
    (candidate) => candidate.score >= minScore
  );

  const getScoreStyle = (score) => {
    if (score >= 90) {
      return "text-green-400";
    }

    if (score >= 80) {
      return "text-blue-400";
    }

    if (score >= 70) {
      return "text-yellow-400";
    }

    return "text-red-400";
  };

  const getStatusStyle = (status) => {
    if (status === "Highly Recommended") {
      return "bg-green-500/10 text-green-400 border-green-500/20";
    }

    if (status === "Recommended") {
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }

    if (status === "Potential Match") {
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }

    return "bg-red-500/10 text-red-400 border-red-500/20";
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-2xl">
            🤖
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              AI Shortlist
            </h1>

            <p className="text-[#8fa3bf] mt-1">
              Find the best candidates using AI-powered matching.
            </p>
          </div>

        </div>

      </div>

      {/* Controls */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Job */}
          <div>

            <label className="text-sm text-[#8fa3bf]">
              Select Job
            </label>

            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="w-full mt-2 bg-[#162238] border border-[#34445d] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366f1]"
            >
              <option>Software Engineer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Data Analyst</option>
            </select>

          </div>

          {/* Score */}
          <div>

            <div className="flex justify-between">

              <label className="text-sm text-[#8fa3bf]">
                Minimum AI Match Score
              </label>

              <span className="text-[#a5b4fc] font-semibold">
                {minScore}%
              </span>

            </div>

            <input
              type="range"
              min="50"
              max="95"
              value={minScore}
              onChange={(e) =>
                setMinScore(Number(e.target.value))
              }
              className="w-full mt-4"
            />

          </div>

        </div>

        <div className="mt-6 flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-green-400" />

          <p className="text-[#8fa3bf] text-sm">
            AI has analyzed candidates based on skills, education,
            experience and job requirements.
          </p>

        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Total Applicants
          </p>

          <p className="text-3xl font-bold mt-2">
            {candidates.length}
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            AI Shortlisted
          </p>

          <p className="text-3xl font-bold mt-2 text-green-400">
            {shortlistedCandidates.length}
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Average Match
          </p>

          <p className="text-3xl font-bold mt-2 text-[#a5b4fc]">
            81%
          </p>

        </div>

      </div>

      {/* Candidate List */}
      <div>

        <div className="flex items-center justify-between mb-5">

          <div>
            <h2 className="text-xl font-semibold">
              AI Recommended Candidates
            </h2>

            <p className="text-[#64748b] text-sm mt-1">
              {selectedJob}
            </p>
          </div>

        </div>

        <div className="space-y-4">

          {shortlistedCandidates.map((candidate) => (

            <div
              key={candidate.id}
              className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-[#6366f1]/50 transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">

                {/* Candidate */}
                <div className="flex items-center gap-4 flex-1">

                  <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    {candidate.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg">
                      {candidate.name}
                    </h3>

                    <p className="text-[#64748b] text-sm">
                      {candidate.email}
                    </p>

                    <p className="text-[#8fa3bf] text-sm mt-1">
                      {candidate.education}
                    </p>

                  </div>

                </div>

                {/* Match Score */}
                <div className="text-center min-w-[100px]">

                  <p className="text-[#64748b] text-xs">
                    AI MATCH
                  </p>

                  <p
                    className={`text-3xl font-bold mt-1 ${getScoreStyle(
                      candidate.score
                    )}`}
                  >
                    {candidate.score}%
                  </p>

                </div>

                {/* Status */}
                <div>

                  <span
                    className={`inline-flex px-4 py-2 rounded-xl border text-xs font-medium ${getStatusStyle(
                      candidate.status
                    )}`}
                  >
                    {candidate.status}
                  </span>

                </div>

              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                <div className="bg-[#162238] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs mb-2">
                    Skills
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {candidate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a5b4fc] text-xs"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="bg-[#162238] rounded-xl p-4">

                  <p className="text-[#64748b] text-xs">
                    Experience
                  </p>

                  <p className="text-sm font-medium mt-2">
                    {candidate.experience}
                  </p>

                </div>

              </div>

              {/* Action */}
              <div className="flex justify-end gap-3 mt-5 pt-5 border-t border-[#34445d]">

                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl border border-[#46566e] text-white hover:bg-[#162238] transition text-sm"
                >
                  View Candidate
                </button>

                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-[#6366f1] hover:bg-[#5558e8] text-white font-semibold transition text-sm"
                >
                  Shortlist
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AIShortlist;