import { Link, useParams } from "react-router-dom";

function CandidateDetails() {
  const { id } = useParams();

  const candidates = [
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 98765 43210",
      job: "Software Engineer",
      skills: ["React", "JavaScript", "Node.js", "MongoDB"],
      education: "B.E. Computer Science",
      college: "Jain College of Engineering",
      experience: "Fresher",
      score: 92,
      status: "Shortlisted",
    },
    {
      id: "2",
      name: "Priya Patil",
      email: "priya@example.com",
      phone: "+91 98765 12345",
      job: "Frontend Developer",
      skills: ["React", "HTML", "CSS", "JavaScript"],
      education: "B.E. Computer Science",
      college: "Engineering College",
      experience: "Fresher",
      score: 88,
      status: "Under Review",
    },
    {
      id: "3",
      name: "Arjun Kumar",
      email: "arjun@example.com",
      phone: "+91 98765 67890",
      job: "Software Engineer",
      skills: ["Python", "Django", "SQL"],
      education: "B.E. Computer Science",
      college: "Engineering College",
      experience: "1 Year",
      score: 76,
      status: "Under Review",
    },
    {
      id: "4",
      name: "Sneha Joshi",
      email: "sneha@example.com",
      phone: "+91 98765 11111",
      job: "Data Analyst",
      skills: ["Python", "Excel", "SQL"],
      education: "B.E. Computer Science",
      college: "Engineering College",
      experience: "Fresher",
      score: 69,
      status: "Rejected",
    },
  ];

  const candidate =
    candidates.find((item) => item.id === id) || candidates[0];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-10">

      {/* Back */}
      <Link
        to="/company/applicants"
        className="inline-flex items-center gap-2 text-[#8fa1bd] hover:text-white mb-6 transition"
      >
        ← Back to Applicants
      </Link>

      {/* Header */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-3xl font-bold">
              {candidate.name.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {candidate.name}
              </h1>

              <p className="text-[#8fa1bd] mt-1">
                {candidate.email}
              </p>

              <p className="text-[#8fa1bd]">
                {candidate.phone}
              </p>
            </div>

          </div>

          <div className="text-center">

            <p className="text-[#8fa1bd] text-sm">
              AI Match Score
            </p>

            <div className="text-4xl font-bold text-indigo-400">
              {candidate.score}%
            </div>

          </div>

        </div>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left */}
        <div className="lg:col-span-2 space-y-6">

          {/* Application */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Application Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <p className="text-[#71809c] text-sm">
                  Applied Position
                </p>
                <p className="font-semibold mt-1">
                  {candidate.job}
                </p>
              </div>

              <div>
                <p className="text-[#71809c] text-sm">
                  Experience
                </p>
                <p className="font-semibold mt-1">
                  {candidate.experience}
                </p>
              </div>

              <div>
                <p className="text-[#71809c] text-sm">
                  Education
                </p>
                <p className="font-semibold mt-1">
                  {candidate.education}
                </p>
              </div>

              <div>
                <p className="text-[#71809c] text-sm">
                  College
                </p>
                <p className="font-semibold mt-1">
                  {candidate.college}
                </p>
              </div>

            </div>

          </div>

          {/* Skills */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-xl"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* AI Analysis */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">
              🤖 AI Candidate Analysis
            </h2>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#a7b2c5]">
                    Overall Match
                  </span>

                  <span className="text-indigo-400 font-semibold">
                    {candidate.score}%
                  </span>
                </div>

                <div className="h-2 bg-[#111827] rounded-full">
                  <div
                    className="h-2 bg-indigo-500 rounded-full"
                    style={{ width: `${candidate.score}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#a7b2c5]">
                    Technical Skills
                  </span>

                  <span className="text-green-400">
                    Strong
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="text-[#a7b2c5]">
                    Job Compatibility
                  </span>

                  <span className="text-green-400">
                    High
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="space-y-6">

          {/* Status */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Application Status
            </h2>

            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                candidate.status === "Shortlisted"
                  ? "bg-green-500/10 text-green-400"
                  : candidate.status === "Rejected"
                  ? "bg-red-500/10 text-red-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {candidate.status}
            </span>

          </div>

          {/* Resume */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Resume
            </h2>

            <p className="text-[#8fa1bd] text-sm mb-5">
              View the candidate's uploaded resume.
            </p>

            <button className="w-full border border-[#46566e] hover:bg-[#263650] py-3 rounded-xl transition">
              📄 View Resume
            </button>

          </div>

          {/* Actions */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Actions
            </h2>

            <div className="space-y-3">

              <button className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-xl font-semibold transition">
                ✓ Shortlist Candidate
              </button>

              <button className="w-full border border-[#46566e] hover:bg-[#263650] py-3 rounded-xl transition">
                📅 Schedule Interview
              </button>

              <button className="w-full bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 py-3 rounded-xl transition">
                ✕ Reject Candidate
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CandidateDetails;