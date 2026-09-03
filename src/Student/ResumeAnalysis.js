import { useEffect, useState } from "react";

function ResumeAnalysis() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const savedResume = localStorage.getItem("studentResume");

    if (savedResume) {
      setResume(savedResume);
    }
  }, []);

  // No resume uploaded
  if (!resume) {
    return (
      <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Resume Analysis
          </h1>

          <p className="text-[#8fa3bf] mt-2">
            Get AI-powered insights and recommendations for your resume.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-10 text-center">

            <div className="text-6xl mb-5">
              📄
            </div>

            <h2 className="text-2xl font-semibold">
              No Resume Uploaded
            </h2>

            <p className="text-[#8fa3bf] mt-3">
              Please upload your resume before starting the analysis.
            </p>

            <a
              href="/student/resume"
              className="inline-block mt-6 bg-[#6366f1] hover:bg-[#5558e8] text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Upload Resume
            </a>

          </div>
        </div>

      </div>
    );
  }

  // Resume exists
  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Resume Analysis
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          AI-powered analysis of your uploaded resume.
        </p>
      </div>

      {/* Uploaded Resume */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 mb-8 max-w-3xl">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-2xl">
            📄
          </div>

          <div>
            <p className="text-[#8fa3bf] text-sm">
              Analyzing Resume
            </p>

            <p className="font-semibold mt-1">
              {resume}
            </p>
          </div>

        </div>

      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <p className="text-[#8fa3bf] text-sm">
            Resume Score
          </p>

          <p className="text-5xl font-bold mt-3">
            82
            <span className="text-lg text-[#8fa3bf]">
              /100
            </span>
          </p>

          <div className="w-full bg-[#26354d] rounded-full h-3 mt-5">
            <div
              className="bg-[#6366f1] h-3 rounded-full"
              style={{ width: "82%" }}
            />
          </div>

          <p className="text-green-400 text-sm mt-4">
            Good Resume
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <p className="text-[#8fa3bf] text-sm">
            ATS Compatibility
          </p>

          <p className="text-5xl font-bold mt-3">
            78
            <span className="text-lg text-[#8fa3bf]">
              /100
            </span>
          </p>

          <div className="w-full bg-[#26354d] rounded-full h-3 mt-5">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: "78%" }}
            />
          </div>

          <p className="text-green-400 text-sm mt-4">
            ATS Friendly
          </p>

        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <p className="text-[#8fa3bf] text-sm">
            Job Readiness
          </p>

          <p className="text-5xl font-bold mt-3">
            85%
          </p>

          <div className="w-full bg-[#26354d] rounded-full h-3 mt-5">
            <div
              className="bg-yellow-500 h-3 rounded-full"
              style={{ width: "85%" }}
            />
          </div>

          <p className="text-yellow-400 text-sm mt-4">
            Almost Ready
          </p>

        </div>

      </div>

      {/* Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Skills */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            🛠 Skills Detected
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "Java",
              "Python",
              "React",
              "JavaScript",
              "MongoDB",
              "SQL",
              "HTML",
              "CSS"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-2 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Strengths */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            💪 Resume Strengths
          </h2>

          <div className="space-y-4">

            <p className="text-[#cbd5e1]">
              ✓ Good technical skills
            </p>

            <p className="text-[#cbd5e1]">
              ✓ Clear education section
            </p>

            <p className="text-[#cbd5e1]">
              ✓ Relevant projects included
            </p>

          </div>

        </div>

        {/* Improvements */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            ⚠️ Areas to Improve
          </h2>

          <div className="space-y-4">

            <p className="text-[#cbd5e1]">
              ! Add more project details
            </p>

            <p className="text-[#cbd5e1]">
              ! Improve professional summary
            </p>

            <p className="text-[#cbd5e1]">
              ! Add measurable achievements
            </p>

          </div>

        </div>

        {/* AI Recommendations */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            🤖 AI Recommendations
          </h2>

          <div className="space-y-4">

            <div className="bg-[#162238] rounded-xl p-4">
              Add relevant certifications.
            </div>

            <div className="bg-[#162238] rounded-xl p-4">
              Highlight your strongest projects.
            </div>

            <div className="bg-[#162238] rounded-xl p-4">
              Use keywords relevant to your target jobs.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResumeAnalysis;