import React from "react";

function Reports() {
  const reportCards = [
    {
      title: "Student Report",
      description: "View student registration, activity and placement information.",
      icon: "👨‍🎓",
      value: "1,248",
      label: "Students",
    },
    {
      title: "Company Report",
      description: "View registered companies and their recruitment activity.",
      icon: "🏢",
      value: "86",
      label: "Companies",
    },
    {
      title: "Job Report",
      description: "View posted jobs, approvals and recruitment statistics.",
      icon: "💼",
      value: "342",
      label: "Jobs",
    },
    {
      title: "Placement Report",
      description: "View overall placement performance and hiring statistics.",
      icon: "🎯",
      value: "742",
      label: "Placed",
    },
  ];

  const recentReports = [
    {
      name: "Monthly Placement Report",
      type: "Placement",
      date: "03 Sep 2026",
      status: "Generated",
    },
    {
      name: "Student Registration Report",
      type: "Students",
      date: "01 Sep 2026",
      status: "Generated",
    },
    {
      name: "Company Recruitment Report",
      type: "Companies",
      date: "30 Aug 2026",
      status: "Generated",
    },
    {
      name: "Job Approval Report",
      type: "Jobs",
      date: "28 Aug 2026",
      status: "Generated",
    },
  ];

  const handleGenerate = (reportName) => {
    alert(`${reportName} generated successfully!`);
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Reports
        </h1>

        <p className="text-[#64748b] mt-2">
          Generate and manage placement portal reports.
        </p>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {reportCards.map((report) => (
          <div
            key={report.title}
            className="bg-[#111827] border border-[#263244] rounded-2xl p-5 hover:border-indigo-500/50 transition"
          >

            <div className="flex items-start justify-between">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
                {report.icon}
              </div>

              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                Available
              </span>

            </div>

            <h2 className="text-white font-semibold mt-5">
              {report.title}
            </h2>

            <p className="text-[#64748b] text-sm mt-2 leading-6">
              {report.description}
            </p>

            <div className="mt-5 flex items-end justify-between">

              <div>
                <p className="text-2xl font-bold text-white">
                  {report.value}
                </p>

                <p className="text-[#64748b] text-xs mt-1">
                  {report.label}
                </p>
              </div>

              <button
                onClick={() => handleGenerate(report.title)}
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
              >
                Generate
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Placement Summary */}
      <div className="bg-[#111827] border border-[#263244] rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>
            <h2 className="text-white text-lg font-semibold">
              Placement Summary
            </h2>

            <p className="text-[#64748b] text-sm mt-1">
              Current placement statistics across the portal.
            </p>
          </div>

          <button
            onClick={() => handleGenerate("Placement Summary Report")}
            className="px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
          >
            Generate Report
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="bg-[#1d2a40] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Eligible Students
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              980
            </h3>

            <p className="text-indigo-400 text-xs mt-2">
              78.5% of total students
            </p>
          </div>

          <div className="bg-[#1d2a40] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Students Placed
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              742
            </h3>

            <p className="text-emerald-400 text-xs mt-2">
              +18.4% this year
            </p>
          </div>

          <div className="bg-[#1d2a40] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Placement Rate
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              75.7%
            </h3>

            <p className="text-emerald-400 text-xs mt-2">
              Above previous year
            </p>
          </div>

          <div className="bg-[#1d2a40] rounded-xl p-5">
            <p className="text-[#64748b] text-sm">
              Active Companies
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              64
            </h3>

            <p className="text-indigo-400 text-xs mt-2">
              Recruiting currently
            </p>
          </div>

        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-[#111827] border border-[#263244] rounded-2xl p-6">

        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold">
            Recent Reports
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            Recently generated administrative reports.
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead>
              <tr className="border-b border-[#263244]">

                <th className="text-left py-4 text-[#64748b] text-xs uppercase tracking-wider">
                  Report
                </th>

                <th className="text-left py-4 text-[#64748b] text-xs uppercase tracking-wider">
                  Type
                </th>

                <th className="text-left py-4 text-[#64748b] text-xs uppercase tracking-wider">
                  Generated On
                </th>

                <th className="text-left py-4 text-[#64748b] text-xs uppercase tracking-wider">
                  Status
                </th>

                <th className="text-right py-4 text-[#64748b] text-xs uppercase tracking-wider">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {recentReports.map((report) => (
                <tr
                  key={report.name}
                  className="border-b border-[#263244] last:border-0 hover:bg-[#1d2a40]/40 transition"
                >

                  <td className="py-4">
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        📄
                      </div>

                      <span className="text-white font-medium">
                        {report.name}
                      </span>

                    </div>
                  </td>

                  <td className="py-4 text-[#cbd5e1]">
                    {report.type}
                  </td>

                  <td className="py-4 text-[#94a3b8]">
                    {report.date}
                  </td>

                  <td className="py-4">

                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      {report.status}
                    </span>

                  </td>

                  <td className="py-4 text-right">

                    <button
                      onClick={() => handleGenerate(report.name)}
                      className="px-3 py-2 rounded-lg border border-[#34445d] text-[#cbd5e1] hover:bg-[#1d2a40] hover:text-white text-sm transition"
                    >
                      View
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* Export Section */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            <h2 className="text-white text-lg font-semibold">
              Export Reports
            </h2>

            <p className="text-[#94a3b8] text-sm mt-1">
              Select a report format for your administrative records.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => handleGenerate("PDF Report")}
              className="px-5 py-2.5 rounded-lg bg-white text-[#111827] hover:bg-gray-100 text-sm font-semibold transition"
            >
              Export PDF
            </button>

            <button
              onClick={() => handleGenerate("Excel Report")}
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition"
            >
              Export Excel
            </button>

            <button
              onClick={() => handleGenerate("CSV Report")}
              className="px-5 py-2.5 rounded-lg bg-[#1d2a40] border border-[#34445d] text-white hover:bg-[#263244] text-sm font-semibold transition"
            >
              Export CSV
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;