import { useState } from "react";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    department: "",
    jobType: "",
    workMode: "",
    location: "",
    experience: "",
    salary: "",
    skills: "",
    description: "",
    requirements: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingJobs =
      JSON.parse(localStorage.getItem("companyJobs")) || [];

    const newJob = {
      ...job,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "Active",
    };

    localStorage.setItem(
      "companyJobs",
      JSON.stringify([...existingJobs, newJob])
    );

    alert("Job posted successfully!");

    setJob({
      title: "",
      department: "",
      jobType: "",
      workMode: "",
      location: "",
      experience: "",
      salary: "",
      skills: "",
      description: "",
      requirements: "",
      deadline: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Post a New Job
        </h1>

        <p className="text-[#7f91ad] mt-2">
          Create a job opportunity and find the right candidates.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Basic Information */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Basic Information
            </h2>

            <p className="text-[#71809c] text-sm mt-1">
              Provide the basic details of the job opening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Job Title */}
            <div className="md:col-span-2">
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Job Title
              </label>

              <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                required
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Department
              </label>

              <input
                type="text"
                name="department"
                value={job.department}
                onChange={handleChange}
                placeholder="e.g. Engineering"
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Job Type
              </label>

              <select
                name="jobType"
                value={job.jobType}
                onChange={handleChange}
                required
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            {/* Work Mode */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Work Mode
              </label>

              <select
                name="workMode"
                value={job.workMode}
                onChange={handleChange}
                required
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
              >
                <option value="">Select Work Mode</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                placeholder="e.g. Bengaluru, Karnataka"
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Experience Required
              </label>

              <select
                name="experience"
                value={job.experience}
                onChange={handleChange}
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
              >
                <option value="">Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1 Years">0-1 Years</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Salary / Stipend
              </label>

              <input
                type="text"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                placeholder="e.g. ₹6 - ₹10 LPA"
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500"
              />
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Skills & Requirements
            </h2>

            <p className="text-[#71809c] text-sm mt-1">
              Specify the skills and qualifications required for this role.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">

            <label className="block text-[#a7b2c5] font-semibold mb-2">
              Required Skills
            </label>

            <input
              type="text"
              name="skills"
              value={job.skills}
              onChange={handleChange}
              placeholder="React, JavaScript, Node.js, MongoDB"
              required
              className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500"
            />

            <p className="text-xs text-[#64748b] mt-2">
              Separate multiple skills using commas.
            </p>

          </div>

          {/* Requirements */}
          <div>

            <label className="block text-[#a7b2c5] font-semibold mb-2">
              Candidate Requirements
            </label>

            <textarea
              name="requirements"
              value={job.requirements}
              onChange={handleChange}
              rows="5"
              placeholder="Enter education, qualifications, certifications or other requirements..."
              className="w-full bg-[#111827] border border-[#46566e] rounded-xl p-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 resize-none"
            />

          </div>

        </div>

        {/* Job Description */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Job Description
            </h2>

            <p className="text-[#71809c] text-sm mt-1">
              Describe the role, responsibilities and expectations.
            </p>
          </div>

          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            rows="8"
            placeholder="Describe the job role, responsibilities, day-to-day activities and what the candidate will be working on..."
            required
            className="w-full bg-[#111827] border border-[#46566e] rounded-xl p-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none"
          />

          <div className="flex justify-end mt-2">
            <span className="text-xs text-[#64748b]">
              {job.description.length}/1000
            </span>
          </div>

        </div>

        {/* Application Details */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Application Details
            </h2>

            <p className="text-[#71809c] text-sm mt-1">
              Set the deadline for candidates to apply.
            </p>
          </div>

          <div className="max-w-md">

            <label className="block text-[#a7b2c5] font-semibold mb-2">
              Application Deadline
            </label>

            <input
              type="date"
              name="deadline"
              value={job.deadline}
              onChange={handleChange}
              required
              className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
            />

          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pb-10">

          <button
            type="button"
            onClick={() =>
              setJob({
                title: "",
                department: "",
                jobType: "",
                workMode: "",
                location: "",
                experience: "",
                salary: "",
                skills: "",
                description: "",
                requirements: "",
                deadline: "",
              })
            }
            className="px-6 py-3 rounded-xl border border-[#46566e] text-[#a7b2c5] hover:bg-[#1d2a40] hover:text-white transition font-semibold"
          >
            Clear Form
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition shadow-lg shadow-indigo-500/20"
          >
            🚀 Post Job
          </button>

        </div>

      </form>

    </div>
  );
}

export default PostJob;