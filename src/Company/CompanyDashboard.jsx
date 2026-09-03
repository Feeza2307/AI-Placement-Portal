function CompanyDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Company Overview
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Welcome to your company dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">
          <p className="text-[#8fa3bf] text-sm">
            Active Jobs
          </p>

          <h2 className="text-3xl font-bold text-white mt-3">
            0
          </h2>

          <p className="text-[#64748b] text-sm mt-2">
            Currently active job postings
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">
          <p className="text-[#8fa3bf] text-sm">
            Applicants
          </p>

          <h2 className="text-3xl font-bold text-white mt-3">
            0
          </h2>

          <p className="text-[#64748b] text-sm mt-2">
            Candidates who applied
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">
          <p className="text-[#8fa3bf] text-sm">
            AI Shortlisted
          </p>

          <h2 className="text-3xl font-bold text-white mt-3">
            0
          </h2>

          <p className="text-[#64748b] text-sm mt-2">
            Candidates shortlisted by AI
          </p>
        </div>

      </div>

      <div className="mt-8 bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

        <h2 className="text-xl font-semibold text-white">
          Recent Activity
        </h2>

        <p className="text-[#64748b] text-sm mt-1">
          Your latest recruitment activity will appear here.
        </p>

        <div className="mt-6 border border-dashed border-[#46566e] rounded-xl p-10 text-center">

          <div className="text-4xl mb-3">
            📊
          </div>

          <p className="text-[#8fa3bf]">
            No activity yet
          </p>

          <p className="text-[#64748b] text-sm mt-2">
            Start by posting your first job.
          </p>

        </div>

      </div>
    </div>
  );
}

export default CompanyDashboard;