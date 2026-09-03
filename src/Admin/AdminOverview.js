function AdminOverview() {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12.5%",
      icon: "👨‍🎓",
    },
    {
      title: "Total Companies",
      value: "86",
      change: "+8.2%",
      icon: "🏢",
    },
    {
      title: "Total Jobs",
      value: "342",
      change: "+15.4%",
      icon: "💼",
    },
    {
      title: "Pending Approvals",
      value: "18",
      change: "Needs attention",
      icon: "⏳",
    },
  ];

  const recentStudents = [
    {
      name: "Rahul Patil",
      email: "rahul@example.com",
      date: "Today",
      status: "Active",
    },
    {
      name: "Sneha Kulkarni",
      email: "sneha@example.com",
      date: "Today",
      status: "Active",
    },
    {
      name: "Arjun Desai",
      email: "arjun@example.com",
      date: "Yesterday",
      status: "Active",
    },
    {
      name: "Priya Shah",
      email: "priya@example.com",
      date: "Yesterday",
      status: "Pending",
    },
  ];

  const pendingJobs = [
    {
      company: "TechNova Solutions",
      job: "Software Developer",
      date: "Today",
    },
    {
      company: "InnoSoft Technologies",
      job: "Frontend Developer",
      date: "Today",
    },
    {
      company: "CloudWorks",
      job: "Backend Developer",
      date: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Welcome */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Admin Overview
        </h1>

        <p className="text-[#64748b] mt-1">
          Monitor and manage your AI Placement Portal
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 hover:border-indigo-500/50 transition"
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-[#94a3b8] text-sm">
                  {stat.title}
                </p>

                <h2 className="text-white text-3xl font-bold mt-2">
                  {stat.value}
                </h2>

                <p
                  className={`text-xs mt-2 ${
                    stat.title === "Pending Approvals"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {stat.change}
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#263650] flex items-center justify-center text-2xl">
                {stat.icon}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Recent Students */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden">

          <div className="p-5 border-b border-[#34445d] flex items-center justify-between">

            <div>
              <h2 className="text-white font-semibold text-lg">
                Recent Students
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                Recently registered students
              </p>
            </div>

            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">
              View All
            </button>

          </div>

          <div className="divide-y divide-[#34445d]">

            {recentStudents.map((student) => (
              <div
                key={student.email}
                className="p-4 flex items-center justify-between hover:bg-[#223149] transition"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <span className="text-indigo-400 font-semibold">
                      {student.name.charAt(0)}
                    </span>
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      {student.name}
                    </p>

                    <p className="text-[#64748b] text-xs">
                      {student.email}
                    </p>
                  </div>

                </div>

                <div className="text-right">

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      student.status === "Active"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {student.status}
                  </span>

                  <p className="text-[#64748b] text-xs mt-2">
                    {student.date}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Pending Jobs */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden">

          <div className="p-5 border-b border-[#34445d] flex items-center justify-between">

            <div>
              <h2 className="text-white font-semibold text-lg">
                Pending Job Approvals
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                Jobs waiting for admin review
              </p>
            </div>

            <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">
              View All
            </button>

          </div>

          <div className="divide-y divide-[#34445d]">

            {pendingJobs.map((job) => (
              <div
                key={`${job.company}-${job.job}`}
                className="p-4 flex items-center justify-between hover:bg-[#223149] transition"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400">
                      💼
                    </span>
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      {job.job}
                    </p>

                    <p className="text-[#64748b] text-xs mt-1">
                      {job.company}
                    </p>
                  </div>

                </div>

                <div className="text-right">

                  <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
                    Pending
                  </span>

                  <p className="text-[#64748b] text-xs mt-2">
                    {job.date}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Placement Statistics */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

          <div>
            <h2 className="text-white text-lg font-semibold">
              Placement Statistics
            </h2>

            <p className="text-[#64748b] text-sm mt-1">
              Overall placement performance
            </p>
          </div>

          <select className="mt-4 md:mt-0 bg-[#111827] border border-[#46566e] text-[#cbd5e1] rounded-lg px-4 py-2 text-sm outline-none">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-[#111827] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Eligible Students
            </p>

            <h3 className="text-white text-2xl font-bold mt-2">
              980
            </h3>
          </div>

          <div className="bg-[#111827] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Students Placed
            </p>

            <h3 className="text-green-400 text-2xl font-bold mt-2">
              742
            </h3>
          </div>

          <div className="bg-[#111827] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Placement Rate
            </p>

            <h3 className="text-indigo-400 text-2xl font-bold mt-2">
              75.7%
            </h3>
          </div>

          <div className="bg-[#111827] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Active Companies
            </p>

            <h3 className="text-white text-2xl font-bold mt-2">
              64
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminOverview;