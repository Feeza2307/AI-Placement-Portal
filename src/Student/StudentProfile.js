import { useState } from "react";
import StudentSidebar from "./StudentSidebar";
import "./StudentProfile.css";
function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Student",
    email: "student@example.com",
    phone: "",
    college: "",
    branch: "",
    cgpa: "",
    skills: ["React", "JavaScript", "Python"],
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0d1528] flex">

      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 min-w-0">

        {/* Top Header */}
        <header className="h-20 bg-[#111827] border-b border-[#263244] flex items-center justify-between px-6 md:px-8">

          <div>
            <h2 className="text-white font-semibold text-lg">
              Student Dashboard
            </h2>

            <p className="text-[#64748b] text-xs">
              AI Powered Placement Portal
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button className="relative w-10 h-10 rounded-xl bg-[#1d2a40] border border-[#34445d] flex items-center justify-center">
              <span className="text-lg">🔔</span>

              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center">
                3
              </span>
            </button>

            <div className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center text-white font-bold">
              {profile.name.charAt(0).toUpperCase()}
            </div>

          </div>

        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8">

          {/* Title */}
          <div className="mb-7">

            <h1 className="text-3xl font-bold text-white">
              My Profile
            </h1>

            <p className="text-[#8fa3bf] mt-2">
              Manage your personal and academic information
            </p>

          </div>

          {/* Profile Header */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-2xl bg-[#6366f1] flex items-center justify-center text-white text-3xl font-bold">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {profile.name}
                  </h2>

                  <p className="text-[#8fa3bf] mt-1">
                    {profile.email}
                  </p>

                  <span className="inline-block mt-2 px-3 py-1 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#8fa3bf] text-xs">
                    Student
                  </span>

                </div>

              </div>

              <button
                onClick={() => {
                  if (isEditing) {
                    handleSave();
                  } else {
                    setIsEditing(true);
                  }
                }}
                className="px-6 py-3 bg-[#6366f1] hover:bg-[#5558e8] text-white rounded-xl font-semibold transition"
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </button>

            </div>

          </div>

          {/* Profile Completion */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mb-6">

            <div className="flex items-center justify-between mb-4">

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Profile Completion
                </h2>

                <p className="text-[#8fa3bf] text-sm mt-1">
                  Complete your profile to improve your AI job matching.
                </p>
              </div>

              <span className="text-[#8b8df5] font-bold">
                75%
              </span>

            </div>

            <div className="w-full h-2.5 bg-[#2a374c] rounded-full overflow-hidden">

              <div
                className="h-full bg-[#6366f1] rounded-full"
                style={{ width: "75%" }}
              />

            </div>

          </div>

          {/* Personal + Academic */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* Personal */}
            <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

              <div className="mb-6">

                <h2 className="text-xl font-semibold text-white">
                  Personal Information
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Your basic information
                </p>

              </div>

              <div className="space-y-5">

                <div>
                  <label className="block text-[#8fa3bf] text-sm mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full h-12 px-4 rounded-xl bg-[#162238] border border-[#34445d] text-white outline-none focus:border-[#6366f1] disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="block text-[#8fa3bf] text-sm mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full h-12 px-4 rounded-xl bg-[#162238] border border-[#34445d] text-white outline-none focus:border-[#6366f1] disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="block text-[#8fa3bf] text-sm mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter phone number"
                    className="w-full h-12 px-4 rounded-xl bg-[#162238] border border-[#34445d] text-white placeholder-[#64748b] outline-none focus:border-[#6366f1] disabled:opacity-70"
                  />
                </div>

              </div>

            </div>

            {/* Academic */}
            <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

              <div className="mb-6">

                <h2 className="text-xl font-semibold text-white">
                  Academic Information
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Your academic details
                </p>

              </div>

              <div className="space-y-5">

                <div>
                  <label className="block text-[#8fa3bf] text-sm mb-2">
                    College
                  </label>

                  <input
                    type="text"
                    name="college"
                    value={profile.college}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter college name"
                    className="w-full h-12 px-4 rounded-xl bg-[#162238] border border-[#34445d] text-white placeholder-[#64748b] outline-none focus:border-[#6366f1] disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="block text-[#8fa3bf] text-sm mb-2">
                    Branch
                  </label>

                  <input
                    type="text"
                    name="branch"
                    value={profile.branch}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="e.g. Computer Science"
                    className="w-full h-12 px-4 rounded-xl bg-[#162238] border border-[#34445d] text-white placeholder-[#64748b] outline-none focus:border-[#6366f1] disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="block text-[#8fa3bf] text-sm mb-2">
                    CGPA
                  </label>

                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    name="cgpa"
                    value={profile.cgpa}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="e.g. 8.50"
                    className="w-full h-12 px-4 rounded-xl bg-[#162238] border border-[#34445d] text-white placeholder-[#64748b] outline-none focus:border-[#6366f1] disabled:opacity-70"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Skills */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mt-6">

            <div className="flex items-center justify-between mb-5">

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Skills
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Technical skills
                </p>
              </div>

              <span className="text-[#8b8df5] text-sm">
                {profile.skills.length} Skills
              </span>

            </div>

            <div className="flex flex-wrap gap-3">

              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#a5a6f6] text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Education */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mt-6">

            <h2 className="text-xl font-semibold text-white">
              Education
            </h2>

            <p className="text-[#64748b] text-sm mt-1 mb-5">
              Academic background
            </p>

            <div className="border border-[#34445d] rounded-xl p-5 bg-[#19263b]">

              <h3 className="text-white font-semibold">
                BE / B.Tech
              </h3>

              <p className="text-[#8fa3bf] text-sm mt-2">
                Computer Science and Engineering
              </p>

              <p className="text-[#64748b] text-sm mt-1">
                College information will be added to your profile.
              </p>

            </div>

          </div>

          {/* Projects */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mt-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Projects
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Your projects
                </p>
              </div>

              <button
                disabled={!isEditing}
                className="px-4 py-2 border border-[#34445d] text-[#8fa3bf] rounded-xl text-sm hover:border-[#6366f1] hover:text-white transition disabled:opacity-40"
              >
                + Add Project
              </button>

            </div>

            <div className="mt-5 border border-dashed border-[#46566e] rounded-xl p-8 text-center">

              <div className="text-3xl mb-3">
                📁
              </div>

              <p className="text-[#8fa3bf] text-sm">
                No projects added yet
              </p>

              <p className="text-[#64748b] text-xs mt-1">
                Add your projects to improve your profile.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default StudentProfile;