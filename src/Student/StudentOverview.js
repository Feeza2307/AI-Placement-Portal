function StudentOverview() {
  const stats = [
    {
      title: "Profile Completion",
      value: "75%",
      icon: "👤",
    },
    {
      title: "Resume Score",
      value: "82%",
      icon: "📄",
    },
    {
      title: "Assessment Score",
      value: "78%",
      icon: "📝",
    },
    {
      title: "Interview Score",
      value: "85%",
      icon: "🎤",
    },
  ];

  return (
    <div>

      {/* Welcome */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Welcome back! 👋
        </h1>

        <p className="text-[#71809c] mt-2">
          Here's an overview of your placement journey.
        </p>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5"
          >

            <div className="flex items-center justify-between mb-4">

              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <span className="text-xl">
                  {stat.icon}
                </span>
              </div>

              <span className="text-2xl font-bold text-white">
                {stat.value}
              </span>

            </div>

            <p className="text-[#8b9ab0] text-sm">
              {stat.title}
            </p>

          </div>
        ))}

      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Profile */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-white text-xl font-semibold">
              Profile
            </h2>

            <span className="text-indigo-400 text-sm">
              75% Complete
            </span>

          </div>

          <div className="w-full h-2 bg-[#2a374c] rounded-full overflow-hidden">

            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: "75%" }}
            />

          </div>

          <p className="text-[#71809c] text-sm mt-4">
            Complete your profile to improve your AI job matching.
          </p>

          <button className="mt-5 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-medium transition">
            Complete Profile
          </button>

        </div>

        {/* Placement Activity */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <h2 className="text-white text-xl font-semibold mb-5">
            Placement Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8]">
                Jobs Applied
              </span>

              <span className="text-white font-semibold">
                8
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8]">
                Shortlisted
              </span>

              <span className="text-green-400 font-semibold">
                3
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8]">
                Interviews
              </span>

              <span className="text-indigo-400 font-semibold">
                2
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#94a3b8]">
                AI Job Matches
              </span>

              <span className="text-purple-400 font-semibold">
                12
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Recommended Jobs */}
      <div className="mt-6 bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-white text-xl font-semibold">
            Recommended Jobs
          </h2>

          <button className="text-indigo-400 hover:text-indigo-300 text-sm">
            View all
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {[
            {
              company: "Google",
              role: "Software Engineer",
              match: "94% Match",
            },
            {
              company: "Microsoft",
              role: "Frontend Developer",
              match: "91% Match",
            },
            {
              company: "Infosys",
              role: "Graduate Engineer",
              match: "87% Match",
            },
          ].map((job) => (

            <div
              key={job.company}
              className="border border-[#34445d] rounded-xl p-4 hover:border-indigo-500 transition"
            >

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-white font-semibold">
                    {job.role}
                  </h3>

                  <p className="text-[#71809c] text-sm mt-1">
                    {job.company}
                  </p>
                </div>

                <span className="text-green-400 text-xs font-semibold">
                  {job.match}
                </span>

              </div>

              <button className="w-full mt-4 py-2 border border-[#46566e] hover:border-indigo-500 text-white rounded-lg text-sm transition">
                View Job
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default StudentOverview;