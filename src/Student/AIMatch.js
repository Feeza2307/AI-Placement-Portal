import { useState } from "react";

function AIMatch() {
  const [selectedJob, setSelectedJob] = useState(null);

  const matches = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      match: 92,
      skills: ["Java", "Python", "DSA"],
      matchedSkills: ["Java", "Python"],
      missingSkills: ["System Design"],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      match: 87,
      skills: ["React", "JavaScript", "HTML", "CSS"],
      matchedSkills: ["React", "JavaScript", "HTML"],
      missingSkills: ["TypeScript"],
    },
    {
      id: 3,
      role: "Graduate Software Developer",
      company: "Amazon",
      location: "Bangalore, India",
      match: 81,
      skills: ["Java", "Python", "SQL"],
      matchedSkills: ["Java", "Python", "SQL"],
      missingSkills: ["AWS"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          AI Job Match
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Discover jobs that match your skills, profile, and career goals.
        </p>
      </div>

      {/* AI Summary */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mb-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-2xl">
                🤖
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  AI Matching Engine
                </h2>

                <p className="text-[#8fa3bf] text-sm mt-1">
                  Based on your profile and skills
                </p>
              </div>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-[#8fa3bf] text-sm">
              Jobs Matched
            </p>

            <p className="text-3xl font-bold text-[#a5b4fc]">
              {matches.length}
            </p>
          </div>

        </div>

      </div>

      {/* Match Cards */}
      <div className="space-y-5">

        {matches.map((job) => (
          <div
            key={job.id}
            className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-[#6366f1]/60 transition"
          >

            {/* Top */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-xl font-bold text-[#a5b4fc]">
                  {job.company.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    {job.role}
                  </h2>

                  <p className="text-[#8fa3bf] text-sm mt-1">
                    {job.company}
                  </p>

                  <p className="text-[#64748b] text-sm mt-1">
                    📍 {job.location}
                  </p>
                </div>

              </div>

              {/* Match Score */}
              <div className="text-left md:text-right">

                <p className="text-[#8fa3bf] text-xs">
                  AI Match
                </p>

                <p className="text-3xl font-bold text-green-400">
                  {job.match}%
                </p>

              </div>

            </div>

            {/* Progress */}
            <div className="mt-5">

              <div className="flex justify-between text-xs mb-2">
                <span className="text-[#8fa3bf]">
                  Match Score
                </span>

                <span className="text-white">
                  {job.match}%
                </span>
              </div>

              <div className="w-full bg-[#26354d] rounded-full h-2">
                <div
                  className="bg-[#6366f1] h-2 rounded-full"
                  style={{ width: `${job.match}%` }}
                />
              </div>

            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              {/* Matched */}
              <div>

                <p className="text-sm font-medium text-green-400 mb-3">
                  ✓ Matching Skills
                </p>

                <div className="flex flex-wrap gap-2">

                  {job.matchedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-green-500/10 border border-green-500/20 text-green-300 px-3 py-1.5 rounded-lg text-xs"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Missing */}
              <div>

                <p className="text-sm font-medium text-yellow-400 mb-3">
                  ⚠ Skills to Improve
                </p>

                <div className="flex flex-wrap gap-2">

                  {job.missingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-3 py-1.5 rounded-lg text-xs"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* Required Skills */}
            <div className="mt-6">

              <p className="text-[#8fa3bf] text-xs mb-2">
                Required Skills
              </p>

              <div className="flex flex-wrap gap-2">

                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#162238] text-[#cbd5e1] px-3 py-1.5 rounded-lg text-xs"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6 pt-5 border-t border-[#34445d]">

              <button
                type="button"
                onClick={() => setSelectedJob(job)}
                className="px-5 py-2.5 rounded-xl border border-[#46566e] text-white hover:bg-[#162238] transition"
              >
                View Match
              </button>

              <button
                type="button"
                onClick={() =>
                  alert(`Application started for ${job.role}`)
                }
                className="px-5 py-2.5 rounded-xl bg-[#6366f1] hover:bg-[#5558e8] text-white font-semibold transition"
              >
                Apply Now
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Match Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-5 z-50">

          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-7 max-w-lg w-full">

            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-xl font-semibold">
                  {selectedJob.role}
                </h2>

                <p className="text-[#8fa3bf] mt-1">
                  {selectedJob.company}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="text-[#8fa3bf] hover:text-white text-xl"
              >
                ✕
              </button>

            </div>

            <div className="mt-6 text-center">

              <p className="text-[#8fa3bf] text-sm">
                AI Match Score
              </p>

              <p className="text-5xl font-bold text-green-400 mt-2">
                {selectedJob.match}%
              </p>

            </div>

            <div className="mt-6">

              <h3 className="font-semibold mb-3">
                AI Recommendation
              </h3>

              <p className="text-[#8fa3bf] text-sm leading-6">
                Your profile shows a strong match for this position.
                Consider improving the missing skills to increase your
                chances of getting shortlisted.
              </p>

            </div>

            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="w-full mt-6 bg-[#6366f1] hover:bg-[#5558e8] py-3 rounded-xl font-semibold transition"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default AIMatch;