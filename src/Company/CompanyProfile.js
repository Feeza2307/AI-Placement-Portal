import { useState } from "react";

function CompanyProfile() {
  const [company, setCompany] = useState({
    companyName: "XYZ Technologies",
    website: "https://example.in",
    industry: "Education",
    description: "",
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "companyProfile",
      JSON.stringify(company)
    );

    alert("Company profile updated successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Company Profile
          </h1>

          <p className="text-[#7f91ad] mt-2">
            Manage your company information and recruitment profile.
          </p>
        </div>

        {/* Profile Completion */}
        <div className="mt-5 md:mt-0 bg-[#1d2a40] border border-[#34445d] rounded-xl px-5 py-3">
          <div className="flex items-center justify-between gap-6 mb-2">
            <span className="text-sm text-[#8fa3bf]">
              Profile Completion
            </span>

            <span className="text-sm font-semibold text-indigo-400">
              80%
            </span>
          </div>

          <div className="w-44 h-2 bg-[#293750] rounded-full overflow-hidden">
            <div className="h-full w-[80%] bg-indigo-500 rounded-full"></div>
          </div>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        {/* ================= COMPANY HEADER CARD ================= */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            {/* Logo */}
            <div className="relative">

              <div className="w-28 h-28 rounded-2xl bg-[#111827] border border-[#46566e] flex items-center justify-center overflow-hidden">

                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-indigo-400">
                    XYZ
                  </span>
                )}

              </div>

              {/* Upload Button */}
              <label className="absolute -bottom-3 -right-3 cursor-pointer">

                <div className="w-10 h-10 rounded-xl bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center shadow-lg transition">
                  <span className="text-lg">📷</span>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />

              </label>

            </div>

            {/* Company Information */}
            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">

                <h2 className="text-2xl font-bold text-white">
                  {company.companyName || "Your Company"}
                </h2>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                  ✓ Verified
                </span>

              </div>

              <p className="text-[#8fa3bf] mt-2">
                {company.industry || "Industry not selected"}
              </p>

              <p className="text-[#64748b] text-sm mt-3">
                Keep your company information updated to attract
                the best candidates.
              </p>

            </div>

          </div>

        </div>

        {/* ================= COMPANY INFORMATION ================= */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Company Information
            </h2>

            <p className="text-[#71809c] text-sm mt-1">
              Basic information about your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Company Name */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={company.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                required
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Industry
              </label>

              <select
                name="industry"
                value={company.industry}
                onChange={handleChange}
                className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl px-4 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
              >
                <option value="">Select Industry</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Education">
                  Education
                </option>
                <option value="Finance">
                  Finance
                </option>
                <option value="Healthcare">
                  Healthcare
                </option>
                <option value="Manufacturing">
                  Manufacturing
                </option>
                <option value="Consulting">
                  Consulting
                </option>
                <option value="E-Commerce">
                  E-Commerce
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Website */}
            <div className="md:col-span-2">

              <label className="block text-[#a7b2c5] font-semibold mb-2">
                Company Website
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                  🌐
                </span>

                <input
                  type="url"
                  name="website"
                  value={company.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full h-12 bg-[#111827] border border-[#46566e] rounded-xl pl-12 pr-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />

              </div>

            </div>

          </div>

        </div>

        {/* ================= ABOUT COMPANY ================= */}
        <div className="bg-[#1d2a40] border border-[#34445d] rounded-2xl p-6 md:p-8 mb-6">

          <div className="mb-6">

            <h2 className="text-xl font-bold text-white">
              About Company
            </h2>

            <p className="text-[#71809c] text-sm mt-1">
              Tell students and candidates about your organization.
            </p>

          </div>

          <textarea
            name="description"
            value={company.description}
            onChange={handleChange}
            rows="6"
            placeholder="Write a short description about your company, culture, products, services and career opportunities..."
            className="w-full bg-[#111827] border border-[#46566e] rounded-xl p-4 text-white placeholder-[#64748b] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition resize-none"
          />

          <div className="flex justify-between mt-2">

            <span className="text-xs text-[#64748b]">
              A good company description helps candidates understand your organization.
            </span>

            <span className="text-xs text-[#64748b]">
              {company.description.length}/500
            </span>

          </div>

        </div>

        {/* ================= ACTIONS ================= */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pb-8">

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl border border-[#46566e] text-[#a7b2c5] hover:bg-[#1d2a40] hover:text-white transition font-semibold"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-7 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition shadow-lg shadow-indigo-500/20"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}

export default CompanyProfile;