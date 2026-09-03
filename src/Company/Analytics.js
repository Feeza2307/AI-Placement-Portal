import { useState } from "react";

function Analytics() {
  const [period, setPeriod] = useState("This Month");

  const stats = [
    {
      title: "Total Jobs",
      value: "12",
      change: "+3",
      icon: "💼",
    },
    {
      title: "Total Applicants",
      value: "248",
      change: "+18%",
      icon: "👥",
    },
    {
      title: "Shortlisted",
      value: "56",
      change: "+12%",
      icon: "🤖",
    },
    {
      title: "Interviews",
      value: "24",
      change: "+8%",
      icon: "📅",
    },
  ];

  const applications = [
    { month: "Jan", value: 35 },
    { month: "Feb", value: 48 },
    { month: "Mar", value: 62 },
    { month: "Apr", value: 55 },
    { month: "May", value: 78 },
    { month: "Jun", value: 92 },
  ];

  const jobs = [
    {
      title: "Software Engineer",
      applicants: 82,
      shortlisted: 18,
      interviews: 8,
    },
    {
      title: "Frontend Developer",
      applicants: 64,
      shortlisted: 14,
      interviews: 6,
    },
    {
      title: "Backend Developer",
      applicants: 51,
      shortlisted: 12,
      interviews: 5,
    },
    {
      title: "Data Analyst",
      applicants: 51,
      shortlisted: 12,
      interviews: 5,
    },
  ];

  const maxApplications = Math.max(
    ...applications.map((item) => item.value)
  );

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Analytics
          </h1>

          <p className="text-[#8fa3bf] mt-2">
            Track your recruitment performance and hiring activity.
          </p>
        </div>

        {/* Period */}
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="bg-[#1d2a40] border border-[#34445d] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#6366f1]"
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[#8fa3bf] text-sm">
                  {stat.title}
                </p>

                <p className="text-3xl font-bold mt-2">
                  {stat.value}
                </p>

                <p className="text-green-400 text-xs mt-2">
                  {stat.change} from last period
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        {/* Applications Chart */}
        <div className="xl:col-span-2 bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-lg font-semibold">
                Applications Overview
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                Number of applications received
              </p>
            </div>

            <span className="text-[#a5b4fc] text-sm font-medium">
              {period}
            </span>

          </div>

          {/* Simple Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-4">

            {applications.map((item) => {
              const height =
                (item.value / maxApplications) * 100;

              return (
                <div
                  key={item.month}
                  className="flex-1 h-full flex flex-col justify-end items-center"
                >

                  <span className="text-xs text-[#8fa3bf] mb-2">
                    {item.value}
                  </span>

                  <div
                    className="w-full max-w-12 bg-[#6366f1] rounded-t-lg hover:bg-[#818cf8] transition"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span className="text-xs text-[#64748b] mt-3">
                    {item.month}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* Recruitment Summary */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <h2 className="text-lg font-semibold">
            Recruitment Summary
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            Candidate pipeline
          </p>

          <div className="mt-8 space-y-6">

            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-[#8fa3bf]">
                  Applications
                </span>

                <span>
                  248
                </span>

              </div>

              <div className="h-2 bg-[#162238] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6366f1] rounded-full"
                  style={{ width: "100%" }}
                />
              </div>

            </div>

            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-[#8fa3bf]">
                  Shortlisted
                </span>

                <span>
                  56
                </span>

              </div>

              <div className="h-2 bg-[#162238] rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "55%" }}
                />
              </div>

            </div>

            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-[#8fa3bf]">
                  Interviews
                </span>

                <span>
                  24
                </span>

              </div>

              <div className="h-2 bg-[#162238] rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500 rounded-full"
                  style={{ width: "30%" }}
                />
              </div>

            </div>

            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-[#8fa3bf]">
                  Selected
                </span>

                <span>
                  9
                </span>

              </div>

              <div className="h-2 bg-[#162238] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: "18%" }}
                />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Job Performance */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-[#34445d]">

          <h2 className="text-lg font-semibold">
            Job Performance
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            Recruitment performance by job
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-[#34445d]">

                <th className="text-left px-6 py-4 text-xs text-[#64748b] uppercase">
                  Job Position
                </th>

                <th className="text-center px-6 py-4 text-xs text-[#64748b] uppercase">
                  Applicants
                </th>

                <th className="text-center px-6 py-4 text-xs text-[#64748b] uppercase">
                  Shortlisted
                </th>

                <th className="text-center px-6 py-4 text-xs text-[#64748b] uppercase">
                  Interviews
                </th>

                <th className="text-center px-6 py-4 text-xs text-[#64748b] uppercase">
                  Conversion
                </th>

              </tr>
            </thead>

            <tbody>

              {jobs.map((job) => {

                const conversion =
                  Math.round(
                    (job.interviews / job.applicants) * 100
                  );

                return (
                  <tr
                    key={job.title}
                    className="border-b border-[#34445d] last:border-b-0 hover:bg-[#162238] transition"
                  >

                    <td className="px-6 py-5">

                      <p className="font-medium">
                        {job.title}
                      </p>

                    </td>

                    <td className="text-center px-6 py-5 text-[#8fa3bf]">
                      {job.applicants}
                    </td>

                    <td className="text-center px-6 py-5 text-[#a5b4fc]">
                      {job.shortlisted}
                    </td>

                    <td className="text-center px-6 py-5 text-blue-400">
                      {job.interviews}
                    </td>

                    <td className="text-center px-6 py-5">

                      <span className="px-3 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs">
                        {conversion}%
                      </span>

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Analytics;