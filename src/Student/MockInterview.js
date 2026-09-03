import { useState } from "react";

function MockInterview() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const questions = [
    "Tell me about yourself and your technical background.",
    "Explain one of your major academic projects.",
    "What programming languages are you most comfortable with?",
    "What is the difference between SQL and NoSQL databases?",
    "Why should we hire you for this position?",
  ];

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setCompleted(false);
  };

  /* Interview completed */
  if (completed) {
    return (
      <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

        <div className="max-w-3xl mx-auto">

          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-10 text-center">

            <div className="text-6xl mb-5">
              🎉
            </div>

            <h1 className="text-3xl font-bold">
              Interview Completed
            </h1>

            <p className="text-[#8fa3bf] mt-3">
              Great job! You have completed your mock interview.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-[#162238] rounded-xl p-5">
                <p className="text-[#64748b] text-sm">
                  Questions
                </p>

                <p className="text-3xl font-bold mt-2">
                  {questions.length}
                </p>
              </div>

              <div className="bg-[#162238] rounded-xl p-5">
                <p className="text-[#64748b] text-sm">
                  Answered
                </p>

                <p className="text-3xl font-bold mt-2">
                  {Object.keys(answers).length}
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="mt-8 bg-[#6366f1] hover:bg-[#5558e8] px-6 py-3 rounded-xl font-semibold transition"
            >
              Start New Interview
            </button>

          </div>

        </div>

      </div>
    );
  }

  /* Interview started */
  if (started) {
    const progress =
      ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">

            <div>
              <h1 className="text-2xl font-bold">
                AI Mock Interview
              </h1>

              <p className="text-[#8fa3bf] text-sm mt-1">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <div className="text-[#a5b4fc] font-semibold">
              {Math.round(progress)}%
            </div>

          </div>

          {/* Progress */}
          <div className="w-full bg-[#26354d] rounded-full h-2 mb-8">

            <div
              className="bg-[#6366f1] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />

          </div>

          {/* AI Interviewer */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 mb-6">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-2xl">
                🤖
              </div>

              <div>
                <h2 className="font-semibold">
                  AI Interviewer
                </h2>

                <p className="text-[#64748b] text-sm">
                  Technical Interview
                </p>
              </div>

            </div>

            <div className="bg-[#162238] rounded-xl p-5 mt-6">

              <p className="text-lg leading-7">
                {questions[currentQuestion]}
              </p>

            </div>

          </div>

          {/* Answer */}
          <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6">

            <label className="text-sm text-[#8fa3bf]">
              Your Answer
            </label>

            <textarea
              value={answers[currentQuestion] || ""}
              onChange={(e) =>
                handleAnswerChange(e.target.value)
              }
              placeholder="Type your answer here..."
              rows="7"
              className="w-full mt-3 bg-[#162238] border border-[#34445d] rounded-xl p-4 text-white placeholder-[#64748b] resize-none focus:outline-none focus:border-[#6366f1]"
            />

            <div className="flex justify-end mt-5">

              <button
                type="button"
                onClick={handleNext}
                className="bg-[#6366f1] hover:bg-[#5558e8] px-6 py-3 rounded-xl font-semibold transition"
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Interview"
                  : "Next Question →"}
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* Start screen */
  return (
    <div className="min-h-screen bg-[#101827] text-white p-6 md:p-10">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Mock Interview
        </h1>

        <p className="text-[#8fa3bf] mt-2">
          Practice interview questions with our AI-powered
          mock interview system.
        </p>

      </div>

      <div className="max-w-4xl">

        {/* Main Card */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-8">

          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-4xl">
              🤖
            </div>

            <h2 className="text-2xl font-bold mt-5">
              AI Mock Interview
            </h2>

            <p className="text-[#8fa3bf] mt-2 max-w-xl mx-auto">
              Practice common technical and HR interview questions
              and improve your confidence before attending real interviews.
            </p>

          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

            <div className="bg-[#162238] rounded-xl p-5 text-center">

              <div className="text-2xl">
                💬
              </div>

              <h3 className="font-semibold mt-3">
                Interview Questions
              </h3>

              <p className="text-[#64748b] text-xs mt-2">
                Practice realistic interview questions.
              </p>

            </div>

            <div className="bg-[#162238] rounded-xl p-5 text-center">

              <div className="text-2xl">
                📊
              </div>

              <h3 className="font-semibold mt-3">
                Performance
              </h3>

              <p className="text-[#64748b] text-xs mt-2">
                Review your interview performance.
              </p>

            </div>

            <div className="bg-[#162238] rounded-xl p-5 text-center">

              <div className="text-2xl">
                🤖
              </div>

              <h3 className="font-semibold mt-3">
                AI Feedback
              </h3>

              <p className="text-[#64748b] text-xs mt-2">
                Get personalized improvement suggestions.
              </p>

            </div>

          </div>

          {/* Start */}
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="w-full mt-8 bg-[#6366f1] hover:bg-[#5558e8] text-white py-3 rounded-xl font-semibold transition"
          >
            Start Mock Interview
          </button>

        </div>

      </div>

    </div>
  );
}

export default MockInterview;