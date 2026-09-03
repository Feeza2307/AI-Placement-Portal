import { useState } from "react";

function InterviewScheduler() {
  const [showForm, setShowForm] = useState(false);

  const [interviews, setInterviews] = useState([
    {
      id: 1,
      candidate: "Rahul Sharma",
      role: "Software Engineer",
      date: "August 12, 2026",
      time: "10:00 AM",
      type: "Video Interview",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Priya Patil",
      role: "Frontend Developer",
      date: "August 13, 2026",
      time: "2:30 PM",
      type: "Technical Interview",
      status: "Scheduled",
    },
  ]);

  const [formData, setFormData] = useState({
    candidate: "",
    role: "",
    date: "",
    time: "",
    type: "Video Interview",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scheduleInterview = (e) => {
    e.preventDefault();

    if (
      !formData.candidate ||
      !formData.role ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newInterview = {
      id: Date.now(),
      candidate: formData.candidate,
      role: formData.role,
      date: formData.date,
      time: formData.time,
      type: formData.type,
      status: "Scheduled",
    };

    setInterviews([...interviews, newInterview]);

    setFormData({
      candidate: "",
      role: "",
      date: "",
      time: "",
      type: "Video Interview",
    });

    setShowForm(false);

    alert("Interview scheduled successfully!");
  };

  const cancelInterview = (id) => {
    setInterviews(
      interviews.map((interview) =>
        interview.id === id
          ? { ...interview, status: "Cancelled" }
          : interview
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Interview Scheduler
          </h1>

          <p className="text-[#8fa3bf] mt-2">
            Schedule and manage candidate interviews.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="bg-[#6366f1] hover:bg-[#5558e8] px-5 py-3 rounded-xl font-semibold transition"
        >
          + Schedule Interview
        </button>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Total Interviews
          </p>

          <p className="text-3xl font-bold mt-2">
            {interviews.length}
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Scheduled
          </p>

          <p className="text-3xl font-bold mt-2 text-green-400">
            {
              interviews.filter(
                (item) => item.status === "Scheduled"
              ).length
            }
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <p className="text-[#8fa3bf] text-sm">
            Cancelled
          </p>

          <p className="text-3xl font-bold mt-2 text-red-400">
            {
              interviews.filter(
                (item) => item.status === "Cancelled"
              ).length
            }
          </p>
        </div>

      </div>

      {/* Interviews */}
      <div className="space-y-5">

        {interviews.map((interview) => (
          <div
            key={interview.id}
            className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6"
          >

            <div className="flex flex-col lg:flex-row lg:items-center gap-5">

              {/* Candidate */}
              <div className="flex items-center gap-4 flex-1">

                <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  {interview.candidate.charAt(0)}
                </div>

                <div>

                  <h2 className="text-lg font-semibold">
                    {interview.candidate}
                  </h2>

                  <p className="text-[#8fa3bf] text-sm mt-1">
                    {interview.role}
                  </p>

                </div>

              </div>

              {/* Date */}
              <div className="bg-[#162238] rounded-xl px-5 py-3">

                <p className="text-[#64748b] text-xs">
                  Date
                </p>

                <p className="text-sm font-medium mt-1">
                  📅 {interview.date}
                </p>

              </div>

              {/* Time */}
              <div className="bg-[#162238] rounded-xl px-5 py-3">

                <p className="text-[#64748b] text-xs">
                  Time
                </p>

                <p className="text-sm font-medium mt-1">
                  🕐 {interview.time}
                </p>

              </div>

              {/* Status */}
              <span
                className={`px-4 py-2 rounded-xl border text-xs font-medium ${
                  interview.status === "Scheduled"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                {interview.status}
              </span>

            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 pt-5 border-t border-[#34445d]">

              <div>

                <p className="text-[#64748b] text-xs">
                  Interview Type
                </p>

                <p className="text-sm mt-1">
                  {interview.type}
                </p>

              </div>

              {interview.status === "Scheduled" && (
                <div className="flex gap-3">

                  <button
                    type="button"
                    className="px-4 py-2 rounded-xl border border-[#46566e] hover:bg-[#162238] text-sm transition"
                  >
                    Reschedule
                  </button>

                  <button
                    type="button"
                    onClick={() => cancelInterview(interview.id)}
                    className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm transition"
                  >
                    Cancel
                  </button>

                </div>
              )}

            </div>

          </div>
        ))}

      </div>

      {/* Schedule Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-5 z-50">

          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-7 w-full max-w-lg">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-semibold">
                  Schedule Interview
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Enter the interview details.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-[#8fa3bf] hover:text-white text-xl"
              >
                ✕
              </button>

            </div>

            <form onSubmit={scheduleInterview}>

              <div className="space-y-4">

                <div>
                  <label className="text-sm text-[#8fa3bf]">
                    Candidate Name
                  </label>

                  <input
                    type="text"
                    name="candidate"
                    value={formData.candidate}
                    onChange={handleChange}
                    placeholder="Enter candidate name"
                    className="w-full mt-2 bg-[#162238] border border-[#34445d] rounded-xl px-4 py-3 text-white placeholder-[#64748b] focus:outline-none focus:border-[#6366f1]"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#8fa3bf]">
                    Job Position
                  </label>

                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Enter job position"
                    className="w-full mt-2 bg-[#162238] border border-[#34445d] rounded-xl px-4 py-3 text-white placeholder-[#64748b] focus:outline-none focus:border-[#6366f1]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm text-[#8fa3bf]">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full mt-2 bg-[#162238] border border-[#34445d] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366f1]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#8fa3bf]">
                      Time
                    </label>

                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full mt-2 bg-[#162238] border border-[#34445d] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366f1]"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-sm text-[#8fa3bf]">
                    Interview Type
                  </label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full mt-2 bg-[#162238] border border-[#34445d] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366f1]"
                  >
                    <option>Video Interview</option>
                    <option>Technical Interview</option>
                    <option>HR Interview</option>
                    <option>In-Person Interview</option>
                  </select>
                </div>

              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-[#6366f1] hover:bg-[#5558e8] py-3 rounded-xl font-semibold transition"
              >
                Schedule Interview
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default InterviewScheduler;