import React from "react";
import Chatbot from "../../components/Chatbot/Chatbot";
const Careers = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="flex justify-between items-center bg-gradient-to-r from-purple-100 to-white py-16">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-lg">
          <span className="text-black">Home</span> /{" "}
          <span className="text-purple-600 font-semibold">Careers</span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-purple-600 font-bold text-lg flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="" />
            </svg>
            JOIN US
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            At Stard, we thrive on new ideas and innovation. We're passionate
            about what we do and believe in empowering our team to contribute,
            grow, and make an impact. Join us, and you'll be part of a
            collaborative environment that encourages creativity and
            professional growth. Together, we’ll push boundaries, shape the
            future, and achieve great things.
          </p>
        </div>

        {/* Current Openings */}
        <div className="bg-[#f6f8ff] py-10 px-4 rounded-lg">
          <h3 className="text-purple-600 font-bold text-lg mb-8 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="..." />
            </svg>
            CURRENT OPENING
          </h3>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-center">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
            </div>
            <select className="w-full max-w-xs py-2 px-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500">
              <option>All Locations</option>
              <option>Delhi</option>
            </select>
            <select className="w-full max-w-xs py-2 px-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Job Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-left text-sm">
              <thead className="text-purple-600 font-semibold border-b">
                <tr>
                  <th className="py-3 px-4">Job Title</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Employment Type</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Software Developer</td>
                  <td className="py-3 px-4">Delhi</td>
                  <td className="py-3 px-4">Engineering</td>
                  <td className="py-3 px-4">Full-time</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">
                    Administrative Assistant
                  </td>
                  <td className="py-3 px-4">Delhi</td>
                  <td className="py-3 px-4">Admin</td>
                  <td className="py-3 px-4">Full-time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Chatbot />
    </section>
  );
};

export default Careers;
