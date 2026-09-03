import { useState } from "react";

function JobPortal() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore, India",
      type: "Full Time",
      category: "Software Development",
      salary: "₹12 - 20 LPA",
      skills: ["Java", "Python", "DSA"],
      posted: "2 days ago",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Developer",
      location: "Hyderabad, India",
      type: "Full Time",
      category: "Web Development",
      salary: "₹10 - 18 LPA",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      posted: "3 days ago",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Graduate Software Developer",
      location: "Bangalore, India",
      type: "Full Time",
      category: "Software Development",
      salary: "₹9 - 16 LPA",
      skills: ["Java", "Python", "SQL"],
      posted: "5 days ago",
    },
    {
      id: 4,
      company: "Infosys",
      role: "System Engineer",
      location: "Pune, India",
      type: "Full Time",
      category: "IT Services",
      salary: "₹4 - 7 LPA",
      skills: ["Java", "SQL", "Communication"],
      posted: "1 week ago",
    },
    {
      id: 5,
      company: "TCS",
      role: "Junior Software Developer",
      location: "Mumbai, India",
      type: "Full Time",
      category: "Software Development",
      salary: "₹4 - 8 LPA",
      skills: ["Java", "Python", "SQL"],
      posted: "1 week ago",
    },
    {
      id: 6,
      company: "Wipro",
      role: "React Developer Intern",
      location: "Bangalore, India",
      type: "Internship",
      category: "Web Development",
      salary: "₹20,000/month",
      skills: ["React", "JavaScript", "CSS"],
      posted: "2 weeks ago",
    },
  ];

  const categories = [
    "All",
    "Software Development",
    "Web Development",
    "IT Services",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Job Portal
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Discover job opportunities that match your skills and career goals.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 mb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Search */}
          <div className="md:col-span-2">
            <label className="text-sm text-[#8fa3bf] mb-2 block">
              Search Jobs
            </label>

            <div className="relative">
              <span className="absolute left-4 top-3 text-[#64748b]">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search by job title, company, skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#162238] border border-[#34445d] rounded-xl py-3 pl-11 pr-4 text-white placeholder-[#64748b] focus:outline-none focus:border-[#6366f1]"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-[#8fa3bf] mb-2 block">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#162238] border border-[#34445d] rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#6366f1]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-semibold">
            Available Jobs
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            {filteredJobs.length} jobs found
          </p>
        </div>

      </div>

      {/* Job Cards */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-[#6366f1]/60 transition"
            >

              {/* Company and Save */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-xl font-bold text-[#a5b4fc]">
                    {job.company.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.role}
                    </h3>

                    <p className="text-[#8fa3bf] text-sm mt-1">
                      {job.company}
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  className="text-[#8fa3bf] hover:text-yellow-400 text-xl transition"
                  title="Save Job"
                >
                  ♡
                </button>

              </div>

              {/* Job Information */}
              <div className="flex flex-wrap gap-3 mt-5">

                <span className="bg-[#162238] text-[#cbd5e1] px-3 py-1.5 rounded-lg text-xs">
                  📍 {job.location}
                </span>

                <span className="bg-[#162238] text-[#cbd5e1] px-3 py-1.5 rounded-lg text-xs">
                  💼 {job.type}
                </span>

                <span className="bg-[#162238] text-[#cbd5e1] px-3 py-1.5 rounded-lg text-xs">
                  💰 {job.salary}
                </span>

              </div>

              {/* Skills */}
              <div className="mt-5">

                <p className="text-[#8fa3bf] text-xs mb-2">
                  Required Skills
                </p>

                <div className="flex flex-wrap gap-2">

                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a5b4fc] px-3 py-1 rounded-lg text-xs"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#34445d]">

                <p className="text-[#64748b] text-xs">
                  Posted {job.posted}
                </p>

                <div className="flex gap-3">

                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-[#46566e] text-white text-sm hover:bg-[#162238] transition"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      alert(`Application started for ${job.role} at ${job.company}`)
                    }
                    className="px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#5558e8] text-white text-sm font-semibold transition"
                  >
                    Apply Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      ) : (
        /* No Jobs */
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-12 text-center">

          <div className="text-5xl mb-4">
            🔍
          </div>

          <h3 className="text-xl font-semibold">
            No Jobs Found
          </h3>

          <p className="text-[#8fa3bf] mt-2">
            Try changing your search or category filter.
          </p>

        </div>
      )}

    </div>
  );
}

export default JobPortal;