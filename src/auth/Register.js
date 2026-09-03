import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Account created successfully!");

    navigate("/login");
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
            Create your account
          </h1>

          <p className="text-[#71809c] text-lg mt-3">
            Start your placement journey today
          </p>

        </div>

        {/* Card */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-8 md:p-9 shadow-2xl">

          <form onSubmit={handleRegister}>

            {/* Full Name */}
            <div className="mb-5">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Full name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-[58px] bg-transparent border border-[#46566e] rounded-xl px-4 text-white placeholder-[#687892] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

            </div>

            {/* Email */}
            <div className="mb-5">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Email address
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-[58px] bg-transparent border border-[#46566e] rounded-xl px-4 text-white placeholder-[#687892] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

            </div>

            {/* Password */}
            <div className="mb-5">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full h-[58px] bg-transparent border border-[#46566e] rounded-xl px-4 text-white placeholder-[#687892] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

            </div>

            {/* Confirm Password */}
            <div className="mb-5">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Confirm password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full h-[58px] bg-transparent border border-[#46566e] rounded-xl px-4 text-white placeholder-[#687892] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

            </div>

            {/* Register As */}
            <div className="mb-7">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Register as
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full h-[58px] bg-[#1d2a40] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="student">Student</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
              </select>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full h-[56px] bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold rounded-xl transition flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/20"
            >
              Create account
              <span className="text-2xl">→</span>
            </button>

          </form>

          {/* Login */}
          <div className="text-center mt-7">

            <span className="text-[#71809c]">
              Already have an account?{" "}
            </span>

            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Sign in
            </Link>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-[#52617a] text-sm mt-7">
          © 2026 AI Placement Portal
        </p>

      </div>

    </div>
  );
}

export default Register;