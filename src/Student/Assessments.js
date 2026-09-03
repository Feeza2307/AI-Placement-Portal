import { useState } from "react";

function Assessments() {
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const assessments = [
    {
      id: 1,
      title: "Java Programming",
      description: "Test your Java programming fundamentals and problem-solving skills.",
      category: "Programming",
      difficulty: "Intermediate",
      questions: 20,
      duration: "30 min",
      skills: ["Java", "OOP", "DSA"],
      status: "Not Started",
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Evaluate your Python programming and logical thinking abilities.",
      category: "Programming",
      difficulty: "Intermediate",
      questions: 20,
      duration: "30 min",
      skills: ["Python", "Logic", "Problem Solving"],
      status: "Not Started",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Test your knowledge of modern web development technologies.",
      category: "Web Development",
      difficulty: "Beginner",
      questions: 15,
      duration: "25 min",
      skills: ["HTML", "CSS", "JavaScript"],
      status: "Not Started",
    },
    {
      id: 4,
      title: "Database & SQL",
      description: "Assess your database concepts and SQL query skills.",
      category: "Database",
      difficulty: "Intermediate",
      questions: 20,
      duration: "30 min",
      skills: ["SQL", "MySQL", "Database"],
      status: "Not Started",
    },
  ];

  const handleStart = (assessment) => {
    setSelectedAssessment(assessment);
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Assessments
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Test your skills and prepare yourself for placement opportunities.
        </p>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Available
          </p>

          <p className="text-3xl font-bold mt-2">
            4
          </p>

          <p className="text-[#64748b] text-xs mt-2">
            Assessments
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Completed
          </p>

          <p className="text-3xl font-bold mt-2">
            0
          </p>

          <p className="text-[#64748b] text-xs mt-2">
            Assessments
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <p className="text-[#8fa3bf] text-sm">
            Average Score
          </p>

          <p className="text-3xl font-bold mt-2">
            --
          </p>

          <p className="text-[#64748b] text-xs mt-2">
            No attempts yet
          </p>

        </div>

      </div>

      {/* Assessment List */}
      <div>

        <h2 className="text-xl font-semibold mb-5">
          Available Assessments
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 hover:border-[#6366f1]/60 transition"
            >

              {/* Top */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-2xl">
                    📝
                  </div>

                  <div>

                    <h3 className="text-lg font-semibold">
                      {assessment.title}
                    </h3>

                    <p className="text-[#8fa3bf] text-xs mt-1">
                      {assessment.category}
                    </p>

                  </div>

                </div>

                <span className="text-xs px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                  {assessment.difficulty}
                </span>

              </div>

              {/* Description */}
              <p className="text-[#8fa3bf] text-sm leading-6 mt-5">
                {assessment.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mt-5">

                <div className="bg-[#162238] rounded-xl p-3">

                  <p className="text-[#64748b] text-xs">
                    Questions
                  </p>

                  <p className="font-semibold mt-1">
                    {assessment.questions}
                  </p>

                </div>

                <div className="bg-[#162238] rounded-xl p-3">

                  <p className="text-[#64748b] text-xs">
                    Duration
                  </p>

                  <p className="font-semibold mt-1">
                    {assessment.duration}
                  </p>

                </div>

              </div>

              {/* Skills */}
              <div className="mt-5">

                <p className="text-[#64748b] text-xs mb-2">
                  Skills Tested
                </p>

                <div className="flex flex-wrap gap-2">

                  {assessment.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a5b4fc] px-3 py-1.5 rounded-lg text-xs"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => handleStart(assessment)}
                className="w-full mt-6 bg-[#6366f1] hover:bg-[#5558e8] text-white py-3 rounded-xl font-semibold transition"
              >
                Start Assessment
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* Start Modal */}
      {selectedAssessment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-5 z-50">

          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-7 max-w-lg w-full">

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-xl font-semibold">
                  {selectedAssessment.title}
                </h2>

                <p className="text-[#8fa3bf] text-sm mt-1">
                  Ready to begin?
                </p>

              </div>

              <button
                type="button"
                onClick={() => setSelectedAssessment(null)}
                className="text-[#8fa3bf] hover:text-white text-xl"
              >
                ✕
              </button>

            </div>

            <div className="bg-[#162238] rounded-xl p-5 mt-6">

              <div className="flex justify-between mb-3">
                <span className="text-[#8fa3bf]">
                  Questions
                </span>

                <span className="font-semibold">
                  {selectedAssessment.questions}
                </span>
              </div>

              <div className="flex justify-between mb-3">
                <span className="text-[#8fa3bf]">
                  Duration
                </span>

                <span className="font-semibold">
                  {selectedAssessment.duration}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8fa3bf]">
                  Difficulty
                </span>

                <span className="font-semibold">
                  {selectedAssessment.difficulty}
                </span>
              </div>

            </div>

            <p className="text-[#8fa3bf] text-sm leading-6 mt-5">
              Once you start the assessment, you should complete it
              within the given duration.
            </p>

            <button
              type="button"
              onClick={() =>
                alert(
                  `${selectedAssessment.title} assessment will be started in the next step.`
                )
              }
              className="w-full mt-6 bg-[#6366f1] hover:bg-[#5558e8] py-3 rounded-xl font-semibold transition"
            >
              Begin Assessment
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Assessments;