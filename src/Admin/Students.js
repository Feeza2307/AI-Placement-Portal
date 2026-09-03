import { useState } from "react";

function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      email: "rahul@example.com",
      course: "B.E. Computer Science",
      college: "Jain College of Engineering",
      status: "Active",
      joined: "02 Sep 2026",
      applications: 8,
    },
    {
      id: 2,
      name: "Sneha Kulkarni",
      email: "sneha@example.com",
      course: "B.E. Information Science",
      college: "KLE Technological University",
      status: "Active",
      joined: "01 Sep 2026",
      applications: 12,
    },
    {
      id: 3,
      name: "Arjun Desai",
      email: "arjun@example.com",
      course: "B.E. Computer Science",
      college: "VTU Belagavi",
      status: "Active",
      joined: "30 Aug 2026",
      applications: 6,
    },
    {
      id: 4,
      name: "Priya Shah",
      email: "priya@example.com",
      course: "B.E. Electronics",
      college: "KLE Institute of Technology",
      status: "Pending",
      joined: "29 Aug 2026",
      applications: 3,
    },
    {
      id: 5,
      name: "Amit Joshi",
      email: "amit@example.com",
      course: "B.E. Mechanical Engineering",
      college: "Jain College of Engineering",
      status: "Inactive",
      joined: "25 Aug 2026",
      applications: 4,
    },
    {
      id: 6,
      name: "Neha Patil",
      email: "neha@example.com",
      course: "B.E. Computer Science",
      college: "KLE Technological University",
      status: "Active",
      joined: "22 Aug 2026",
      applications: 10,
    },
  ]);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || student.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "Active" ? "Inactive" : "Active",
            }
          : student
      )
    );
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this student?"
    );

    if (!confirmDelete) return;

    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );

    setSelectedStudent(null);
  };

  const getStatusClass = (status) => {
    if (status === "Active") {
      return "bg-green-500/10 text-green-400 border border-green-500/20";
    }

    if (status === "Pending") {
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    }

    return "bg-red-500/10 text-red-400 border border-red-500/20";
  };

  const totalStudents = students.length;
  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;
  const pendingStudents = students.filter(
    (student) => student.status === "Pending"
  ).length;
  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Students Management
        </h1>

        <p className="text-[#64748b] mt-1">
          Manage registered students and monitor their placement activity.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {/* Total */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#94a3b8] text-sm">
                Total Students
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalStudents}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
              👨‍🎓
            </div>
          </div>
        </div>

        {/* Active */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#94a3b8] text-sm">
                Active Students
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-400">
                {activeStudents}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl">
              ✓
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#94a3b8] text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-bold mt-2 text-yellow-400">
                {pendingStudents}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-2xl">
              ⏳
            </div>
          </div>
        </div>

        {/* Inactive */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#94a3b8] text-sm">
                Inactive
              </p>

              <h2 className="text-3xl font-bold mt-2 text-red-400">
                {inactiveStudents}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-2xl">
              !
            </div>
          </div>
        </div>

      </div>

      {/* Main Card */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden">

        {/* Card Header */}
        <div className="p-5 border-b border-[#34445d]">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <h2 className="text-lg font-semibold">
                Registered Students
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                View and manage all students registered on the portal.
              </p>
            </div>

            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-3">

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search students..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:w-64 h-11 bg-[#111827] border border-[#46566e] rounded-xl pl-11 pr-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500"
                />

              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-11 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>

            </div>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead>
              <tr className="bg-[#162033] border-b border-[#34445d]">

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Student
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Course
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  College
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Status
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Applications
                </th>

                <th className="text-left px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Joined
                </th>

                <th className="text-right px-5 py-4 text-[#94a3b8] text-xs uppercase tracking-wider">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-[#34445d]">

              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="hover:bg-[#223149] transition"
                  >

                    {/* Student */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <span className="text-indigo-400 font-bold">
                            {student.name.charAt(0)}
                          </span>
                        </div>

                        <div>
                          <p className="text-white text-sm font-semibold">
                            {student.name}
                          </p>

                          <p className="text-[#64748b] text-xs mt-1">
                            {student.email}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Course */}
                    <td className="px-5 py-4">

                      <p className="text-[#cbd5e1] text-sm">
                        {student.course}
                      </p>

                    </td>

                    {/* College */}
                    <td className="px-5 py-4">

                      <p className="text-[#94a3b8] text-sm">
                        {student.college}
                      </p>

                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                          student.status
                        )}`}
                      >
                        {student.status}
                      </span>

                    </td>

                    {/* Applications */}
                    <td className="px-5 py-4">

                      <span className="text-white text-sm font-medium">
                        {student.applications}
                      </span>

                    </td>

                    {/* Joined */}
                    <td className="px-5 py-4">

                      <span className="text-[#94a3b8] text-sm">
                        {student.joined}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        <button
                          onClick={() => setSelectedStudent(student)}
                          className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500 hover:text-white transition"
                        >
                          View
                        </button>

                        <button
                          onClick={() => handleStatusChange(student.id)}
                          className="px-3 py-2 rounded-lg bg-[#111827] border border-[#46566e] text-[#94a3b8] text-xs font-medium hover:text-white hover:border-indigo-500 transition"
                        >
                          {student.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>

                        <button
                          onClick={() => handleDelete(student.id)}
                          className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500 hover:text-white transition"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))
              ) : (

                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center"
                  >
                    <div className="text-4xl mb-3">
                      🔍
                    </div>

                    <p className="text-white font-medium">
                      No students found
                    </p>

                    <p className="text-[#64748b] text-sm mt-1">
                      Try changing your search or filter.
                    </p>
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-[#34445d] flex items-center justify-between">

          <p className="text-[#64748b] text-sm">
            Showing{" "}
            <span className="text-white font-medium">
              {filteredStudents.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-medium">
              {students.length}
            </span>{" "}
            students
          </p>

        </div>

      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

          <div className="w-full max-w-lg bg-[#1d2a40] border border-[#34445d] rounded-2xl shadow-2xl">

            {/* Modal Header */}
            <div className="p-5 border-b border-[#34445d] flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-white">
                  Student Details
                </h2>

                <p className="text-[#64748b] text-sm mt-1">
                  Student profile information
                </p>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="w-9 h-9 rounded-lg bg-[#111827] text-[#94a3b8] hover:text-white transition"
              >
                ✕
              </button>

            </div>

            {/* Modal Body */}
            <div className="p-6">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-2xl font-bold">
                  {selectedStudent.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-white text-xl font-bold">
                    {selectedStudent.name}
                  </h3>

                  <p className="text-[#64748b] text-sm">
                    {selectedStudent.email}
                  </p>

                  <span
                    className={`inline-flex mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      selectedStudent.status
                    )}`}
                  >
                    {selectedStudent.status}
                  </span>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-[#111827] rounded-xl p-4">
                  <p className="text-[#64748b] text-xs">
                    Course
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedStudent.course}
                  </p>
                </div>

                <div className="bg-[#111827] rounded-xl p-4">
                  <p className="text-[#64748b] text-xs">
                    College
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedStudent.college}
                  </p>
                </div>

                <div className="bg-[#111827] rounded-xl p-4">
                  <p className="text-[#64748b] text-xs">
                    Applications
                  </p>

                  <p className="text-indigo-400 text-xl mt-2 font-bold">
                    {selectedStudent.applications}
                  </p>
                </div>

                <div className="bg-[#111827] rounded-xl p-4">
                  <p className="text-[#64748b] text-xs">
                    Joined
                  </p>

                  <p className="text-white text-sm mt-2 font-medium">
                    {selectedStudent.joined}
                  </p>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-[#34445d] flex justify-end gap-3">

              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2.5 rounded-xl bg-[#111827] border border-[#46566e] text-[#cbd5e1] text-sm font-medium hover:text-white transition"
              >
                Close
              </button>

              <button
                onClick={() => handleStatusChange(selectedStudent.id)}
                className="px-5 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
              >
                {selectedStudent.status === "Active"
                  ? "Deactivate Student"
                  : "Activate Student"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Students;