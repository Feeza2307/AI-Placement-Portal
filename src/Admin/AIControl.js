import { useState } from "react";

function AIControl() {
  const [settings, setSettings] = useState({
    resumeAnalysis: true,
    jobMatching: true,
    aiShortlisting: true,
    interviewAnalysis: false,
  });

  const [saved, setSaved] = useState(false);

  const toggleSetting = (name) => {
    setSettings((current) => ({
      ...current,
      [name]: !current[name],
    }));

    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("aiControlSettings", JSON.stringify(settings));
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const enabledFeatures = Object.values(settings).filter(Boolean).length;

  const Toggle = ({ enabled, onClick }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
          enabled ? "bg-indigo-500" : "bg-[#46566e]"
        }`}
      >
        <span
          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
            enabled ? "left-8" : "left-1"
          }`}
        />
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-8">

      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            AI Control
          </h1>

          <p className="text-[#64748b] mt-1">
            Manage and monitor AI features used by the placement portal.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

          <div>
            <p className="text-green-400 text-sm font-semibold">
              AI System Online
            </p>

            <p className="text-[#64748b] text-xs">
              All systems operational
            </p>
          </div>
        </div>

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {/* AI STATUS */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                AI Status
              </p>

              <h2 className="text-2xl font-bold mt-2 text-green-400">
                Online
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl">
              🤖
            </div>

          </div>

        </div>

        {/* ENABLED FEATURES */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Active Features
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {enabledFeatures}/4
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
              ⚙️
            </div>

          </div>

        </div>

        {/* ANALYSIS */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Resumes Analyzed
              </p>

              <h2 className="text-2xl font-bold mt-2">
                1,842
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl">
              📄
            </div>

          </div>

        </div>

        {/* MATCHING */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#94a3b8] text-sm">
                Match Accuracy
              </p>

              <h2 className="text-2xl font-bold mt-2 text-indigo-400">
                91.8%
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl">
              🎯
            </div>

          </div>

        </div>

      </div>

      {/* AI FEATURE CONTROLS */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl overflow-hidden mb-8">

        <div className="p-6 border-b border-[#34445d]">

          <h2 className="text-lg font-semibold">
            AI Feature Controls
          </h2>

          <p className="text-[#64748b] text-sm mt-1">
            Enable or disable AI-powered features across the platform.
          </p>

        </div>

        <div className="divide-y divide-[#34445d]">

          {/* RESUME ANALYSIS */}
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-xl">
                📄
              </div>

              <div>

                <h3 className="text-white font-semibold">
                  AI Resume Analysis
                </h3>

                <p className="text-[#64748b] text-sm mt-1 max-w-xl">
                  Analyze student resumes and identify skills, strengths,
                  missing keywords and improvement areas.
                </p>

                <div className="flex items-center gap-2 mt-3">

                  <span className="text-xs text-[#94a3b8]">
                    Accuracy
                  </span>

                  <span className="text-xs text-green-400 font-semibold">
                    94.2%
                  </span>

                </div>

              </div>

            </div>

            <Toggle
              enabled={settings.resumeAnalysis}
              onClick={() =>
                toggleSetting("resumeAnalysis")
              }
            />

          </div>

          {/* JOB MATCHING */}
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
                🎯
              </div>

              <div>

                <h3 className="text-white font-semibold">
                  AI Job Matching
                </h3>

                <p className="text-[#64748b] text-sm mt-1 max-w-xl">
                  Match students with suitable job opportunities based on
                  skills, education and job requirements.
                </p>

                <div className="flex items-center gap-2 mt-3">

                  <span className="text-xs text-[#94a3b8]">
                    Accuracy
                  </span>

                  <span className="text-xs text-green-400 font-semibold">
                    91.8%
                  </span>

                </div>

              </div>

            </div>

            <Toggle
              enabled={settings.jobMatching}
              onClick={() =>
                toggleSetting("jobMatching")
              }
            />

          </div>

          {/* AI SHORTLIST */}
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl">
                🤖
              </div>

              <div>

                <h3 className="text-white font-semibold">
                  AI Candidate Shortlisting
                </h3>

                <p className="text-[#64748b] text-sm mt-1 max-w-xl">
                  Automatically rank and shortlist candidates according to
                  job requirements and candidate profiles.
                </p>

                <div className="flex items-center gap-2 mt-3">

                  <span className="text-xs text-[#94a3b8]">
                    Accuracy
                  </span>

                  <span className="text-xs text-green-400 font-semibold">
                    89.6%
                  </span>

                </div>

              </div>

            </div>

            <Toggle
              enabled={settings.aiShortlisting}
              onClick={() =>
                toggleSetting("aiShortlisting")
              }
            />

          </div>

          {/* INTERVIEW ANALYSIS */}
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-xl">
                🎤
              </div>

              <div>

                <h3 className="text-white font-semibold">
                  AI Interview Analysis
                </h3>

                <p className="text-[#64748b] text-sm mt-1 max-w-xl">
                  Analyze mock interview performance and provide automated
                  feedback to students.
                </p>

                <div className="flex items-center gap-2 mt-3">

                  <span className="text-xs text-[#94a3b8]">
                    Accuracy
                  </span>

                  <span className="text-xs text-green-400 font-semibold">
                    87.4%
                  </span>

                </div>

              </div>

            </div>

            <Toggle
              enabled={settings.interviewAnalysis}
              onClick={() =>
                toggleSetting("interviewAnalysis")
              }
            />

          </div>

        </div>

      </div>

      {/* PERFORMANCE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* ACCURACY */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-lg font-semibold">
                AI Accuracy
              </h2>

              <p className="text-[#64748b] text-sm mt-1">
                Current AI model performance
              </p>
            </div>

            <span className="text-green-400 font-bold">
              Excellent
            </span>

          </div>

          {/* RESUME */}
          <div className="mb-5">

            <div className="flex justify-between mb-2">

              <span className="text-[#cbd5e1] text-sm">
                Resume Analysis
              </span>

              <span className="text-white text-sm font-semibold">
                94.2%
              </span>

            </div>

            <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">

              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "94.2%" }}
              />

            </div>

          </div>

          {/* JOB MATCH */}
          <div className="mb-5">

            <div className="flex justify-between mb-2">

              <span className="text-[#cbd5e1] text-sm">
                Job Matching
              </span>

              <span className="text-white text-sm font-semibold">
                91.8%
              </span>

            </div>

            <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">

              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "91.8%" }}
              />

            </div>

          </div>

          {/* SHORTLIST */}
          <div className="mb-5">

            <div className="flex justify-between mb-2">

              <span className="text-[#cbd5e1] text-sm">
                Candidate Shortlisting
              </span>

              <span className="text-white text-sm font-semibold">
                89.6%
              </span>

            </div>

            <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">

              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "89.6%" }}
              />

            </div>

          </div>

          {/* INTERVIEW */}
          <div>

            <div className="flex justify-between mb-2">

              <span className="text-[#cbd5e1] text-sm">
                Interview Analysis
              </span>

              <span className="text-white text-sm font-semibold">
                87.4%
              </span>

            </div>

            <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">

              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "87.4%" }}
              />

            </div>

          </div>

        </div>

        {/* USAGE */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

          <div className="mb-6">

            <h2 className="text-lg font-semibold">
              AI Usage Statistics
            </h2>

            <p className="text-[#64748b] text-sm mt-1">
              Platform AI activity this month
            </p>

          </div>

          <div className="space-y-5">

            <div className="flex items-center justify-between bg-[#111827] rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  📄
                </div>

                <div>
                  <p className="text-white text-sm font-medium">
                    Resume Analysis
                  </p>

                  <p className="text-[#64748b] text-xs mt-1">
                    This month
                  </p>
                </div>

              </div>

              <span className="text-white font-bold">
                842
              </span>

            </div>

            <div className="flex items-center justify-between bg-[#111827] rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  🎯
                </div>

                <div>
                  <p className="text-white text-sm font-medium">
                    Job Matching
                  </p>

                  <p className="text-[#64748b] text-xs mt-1">
                    This month
                  </p>
                </div>

              </div>

              <span className="text-white font-bold">
                1,246
              </span>

            </div>

            <div className="flex items-center justify-between bg-[#111827] rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  🤖
                </div>

                <div>
                  <p className="text-white text-sm font-medium">
                    AI Shortlisting
                  </p>

                  <p className="text-[#64748b] text-xs mt-1">
                    This month
                  </p>
                </div>

              </div>

              <span className="text-white font-bold">
                528
              </span>

            </div>

            <div className="flex items-center justify-between bg-[#111827] rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  🎤
                </div>

                <div>
                  <p className="text-white text-sm font-medium">
                    Interview Analysis
                  </p>

                  <p className="text-[#64748b] text-xs mt-1">
                    This month
                  </p>
                </div>

              </div>

              <span className="text-white font-bold">
                316
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* SAVE SETTINGS */}
      <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div>

          <h3 className="text-white font-semibold">
            AI Configuration
          </h3>

          <p className="text-[#64748b] text-sm mt-1">
            Save your AI feature configuration for the placement portal.
          </p>

        </div>

        <button
          onClick={handleSave}
          className={`px-6 py-3 rounded-xl text-sm font-semibold transition ${
            saved
              ? "bg-green-500 text-white"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          {saved ? "✓ Settings Saved" : "Save Settings"}
        </button>

      </div>

    </div>
  );
}

export default AIControl;