import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please select a PDF file only.");
      event.target.value = "";
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a resume first.");
      return;
    }

    localStorage.setItem("studentResume", file.name);

    alert("Resume uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Resume Upload
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Upload your resume to get AI-powered analysis and job recommendations.
        </p>
      </div>

      {/* Upload Card */}
      <div className="max-w-3xl">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-8">

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-4xl">
              📄
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">
              Upload Your Resume
            </h2>

            <p className="text-[#8fa3bf] text-sm mt-2">
              Select your latest resume in PDF format.
            </p>
          </div>

          {/* File Input */}
          <div className="border-2 border-dashed border-[#46566e] rounded-2xl p-8 text-center">

            <div className="text-4xl mb-4">
              📁
            </div>

            <p className="text-white font-medium mb-4">
              Select your resume
            </p>

            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-300
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:bg-[#6366f1] file:text-white
                         file:font-semibold
                         hover:file:bg-[#5558e8]
                         cursor-pointer"
            />

            <p className="text-[#64748b] text-sm mt-3">
              PDF files only
            </p>

          </div>

          {/* Selected File */}
          {file && (
            <div className="mt-5 bg-[#162238] border border-[#34445d] rounded-xl p-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="text-2xl">
                  📄
                </div>

                <div>
                  <p className="text-white text-sm font-medium">
                    {file.name}
                  </p>

                  <p className="text-[#64748b] text-xs mt-1">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-[#8fa3bf] hover:text-white text-sm"
              >
                Remove
              </button>

            </div>
          )}

          {/* Upload */}
          <button
            type="button"
            onClick={handleUpload}
            className="w-full mt-6 bg-[#6366f1] hover:bg-[#5558e8] text-white py-3 rounded-xl font-semibold transition"
          >
            Upload Resume
          </button>

        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mt-8">

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="text-2xl mb-3">🤖</div>

          <h3 className="font-semibold">
            AI Analysis
          </h3>

          <p className="text-[#64748b] text-sm mt-2">
            Your resume will be analyzed by the AI system.
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="text-2xl mb-3">📊</div>

          <h3 className="font-semibold">
            Resume Score
          </h3>

          <p className="text-[#64748b] text-sm mt-2">
            Get a score based on your resume quality.
          </p>
        </div>

        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-5">
          <div className="text-2xl mb-3">🎯</div>

          <h3 className="font-semibold">
            Job Matching
          </h3>

          <p className="text-[#64748b] text-sm mt-2">
            Find jobs that match your skills and profile.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ResumeUpload;