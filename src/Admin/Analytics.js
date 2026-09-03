import React from "react";

function AdminAnalytics() {
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
      change: "+15.7%",
      icon: "💼",
    },
    {
      title: "Students Placed",
      value: "742",
      change: "+18.4%",
      icon: "🎯",
    },
  ];

  const monthlyData = [
    { month: "Jan", students: 85, placements: 42 },
    { month: "Feb", students: 110, placements: 55 },
    { month: "Mar", students: 125, placements: 68 },
    { month: "Apr", students: 145, placements: 76 },
    { month: "May", students: 165, placements: 92 },
    { month: "Jun", students: 190, placements: 108 },
  ];

  const topCompanies = [
    {
      name: "Google",
      jobs: 18,
      hired: 32,
      rate: "89%",
    },
    {
      name: "Microsoft",
      jobs: 15,
      hired: 28,
      rate: "86%",
    },
    {
      name: "Amazon",
      jobs: 22,
      hired: 25,
      rate: "82%",
    },
    {
      name: "Infosys",
      jobs: 35,
      hired: 64,
      rate: "78%",
    },
    {
      name: "TCS",
      jobs: 42,
      hired: 72,
      rate: "75%",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-[#64748b] mt-2">
          Monitor placement portal performance and statistics.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#111827] border border-[#263244] rounded-2xl p-5 hover:border-indigo-500/40 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#64748b] text-sm">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {stat.value}
                </h2>

                <p className="text-green-400 text-xs mt-2">
                  ↑ {stat.change} this month
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Placement Overview */}
        <div className="xl:col-span-2 bg-[#111827] border border-[#263244] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white text-lg font-semibold">
                Placement Overview
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                Students registered and placed over the last 6 months.
              </p>
            </div>

            <select className="bg-[#1d2a40] border border-[#34445d] text-[#cbd5e1] text-sm rounded-lg px-3 py-2 outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>

          {/* Chart */}
          <div className="h-72 flex items-end gap-4 md:gap-8 border-b border-[#263244]">

            {monthlyData.map((data) => (
              <div
                key={data.month}
                className="flex-1 h-full flex items-end justify-center gap-1 md:gap-2"
              >

                {/* Students */}
                <div className="flex flex-col justify-end h-full">
                  <div
                    className="w-4 md:w-7 bg-indigo-500 rounded-t-md"
                    style={{
                      height: `${data.students * 1.15}px`,
                    }}
                    title={`Students: ${data.students}`}
                  ></div>
                </div>

                {/* Placements */}
                <div className="flex flex-col justify-end h-full">
                  <div
                    className="w-4 md:w-7 bg-emerald-500 rounded-t-md"
                    style={{
                      height: `${data.placements * 1.15}px`,
                    }}
                    title={`Placements: ${data.placements}`}
                  ></div>
                </div>

                <span className="absolute mt-[300px] text-xs text-[#64748b]">
                  {data.month}
                </span>
              </div>
            ))}

          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6">

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span className="text-[#94a3b8] text-sm">
                Registered Students
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-[#94a3b8] text-sm">
                Placements
              </span>
            </div>

          </div>
        </div>

        {/* Placement Rate */}
        <div className="bg-[#111827] border border-[#263244] rounded-2xl p-6">

          <h2 className="text-white text-lg font-semibold">
            Placement Rate
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            Overall student placement performance.
          </p>

          <div className="flex justify-center my-8">
            <div className="relative w-44 h-44 rounded-full bg-[#1d2a40] flex items-center justify-center">

              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#6366f1 0deg 273deg, #263244 273deg 360deg)",
                }}
              ></div>

              <div className="absolute w-32 h-32 rounded-full bg-[#111827] flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  75.7%
                </span>

                <span className="text-[#64748b] text-xs mt-1">
                  Placement Rate
                </span>
              </div>

            </div>
          </div>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-[#94a3b8] text-sm">
                Eligible Students
              </span>

              <span className="text-white font-semibold">
                980
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#94a3b8] text-sm">
                Students Placed
              </span>

              <span className="text-emerald-400 font-semibold">
                742
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#94a3b8] text-sm">
                Remaining
              </span>

              <span className="text-orange-400 font-semibold">
                238
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Top Companies */}
      <div className="bg-[#111827] border border-[#263244] rounded-2xl p-6">

        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold">
            Top Recruiting Companies
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            Companies with the highest recruitment activity.
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[650px]">

            <thead>
              <tr className="border-b border-[#263244]">

                <th className="text-left text-[#64748b] text-xs uppercase tracking-wider py-4">
                  Company
                </th>

                <th className="text-center text-[#64748b] text-xs uppercase tracking-wider py-4">
                  Jobs Posted
                </th>

                <th className="text-center text-[#64748b] text-xs uppercase tracking-wider py-4">
                  Students Hired
                </th>

                <th className="text-center text-[#64748b] text-xs uppercase tracking-wider py-4">
                  Success Rate
                </th>

              </tr>
            </thead>

            <tbody>

              {topCompanies.map((company, index) => (
                <tr
                  key={company.name}
                  className="border-b border-[#263244] last:border-0 hover:bg-[#1d2a40]/50 transition"
                >

                  <td className="py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">
                        {index + 1}
                      </div>

                      <span className="text-white font-medium">
                        {company.name}
                      </span>

                    </div>

                  </td>

                  <td className="text-center text-[#cbd5e1]">
                    {company.jobs}
                  </td>

                  <td className="text-center text-[#cbd5e1]">
                    {company.hired}
                  </td>

                  <td className="text-center">

                    <span className="inline-flex px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      {company.rate}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-[#111827] border border-[#263244] rounded-2xl p-5">
          <p className="text-[#64748b] text-sm">
            Active Companies
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            64
          </h3>

          <div className="w-full h-2 bg-[#263244] rounded-full mt-4">
            <div className="h-2 bg-indigo-500 rounded-full w-[74%]"></div>
          </div>

          <p className="text-[#64748b] text-xs mt-2">
            74% of registered companies
          </p>
        </div>

        <div className="bg-[#111827] border border-[#263244] rounded-2xl p-5">
          <p className="text-[#64748b] text-sm">
            Job Approval Rate
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            92.4%
          </h3>

          <div className="w-full h-2 bg-[#263244] rounded-full mt-4">
            <div className="h-2 bg-emerald-500 rounded-full w-[92%]"></div>
          </div>

          <p className="text-[#64748b] text-xs mt-2">
            324 approved jobs
          </p>
        </div>

        <div className="bg-[#111827] border border-[#263244] rounded-2xl p-5">
          <p className="text-[#64748b] text-sm">
            AI Match Accuracy
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            91.8%
          </h3>

          <div className="w-full h-2 bg-[#263244] rounded-full mt-4">
            <div className="h-2 bg-purple-500 rounded-full w-[92%]"></div>
          </div>

          <p className="text-[#64748b] text-xs mt-2">
            Based on recent AI matching
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminAnalytics;