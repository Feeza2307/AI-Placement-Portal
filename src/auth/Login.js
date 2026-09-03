import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      alert("Account not created. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      email.toLowerCase().trim() !== user.email.toLowerCase() ||
      password !== user.password
    ) {
      alert("Incorrect email or password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", user.role);

    alert("Login successful!");

    if (user.role === "student") {
      navigate("/student/dashboard");
    } else if (user.role === "company") {
      navigate("/company/dashboard");
    } else if (user.role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1528] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-[560px]">

        {/* AI Icon */}
        <div className="flex justify-center mb-6">

          <div className="w-[62px] h-[62px] rounded-[18px] bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">

            <span className="text-white text-4xl">
              ✦
            </span>

          </div>

        </div>

        {/* Heading */}
        <div className="text-center mb-9">

          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Welcome back
          </h1>

          <p className="text-[#71809c] text-lg mt-3">
            Sign in to continue your career journey
          </p>

        </div>

        {/* Card */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-8 md:p-9 shadow-2xl">

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-6">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Email address
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71809c] text-xl">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-[60px] bg-transparent border border-[#46566e] rounded-xl pl-12 pr-4 text-white placeholder-[#687892] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />

              </div>

            </div>

            {/* Password */}
            <div className="mb-7">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Password
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71809c] text-lg">
                  🔒
                </span>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-[60px] bg-transparent border border-[#46566e] rounded-xl pl-12 pr-4 text-white placeholder-[#687892] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-[56px] bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold rounded-xl transition flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/20"
            >
              Sign in
              <span className="text-2xl">→</span>
            </button>

          </form>

          {/* Register */}
          <div className="text-center mt-7">

            <span className="text-[#71809c]">
              Don't have an account?{" "}
            </span>

            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Create one
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;