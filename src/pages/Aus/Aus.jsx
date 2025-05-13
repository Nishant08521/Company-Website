import React from "react";
import Chatbot from "../../components/Chatbot/Chatbot";
const Aus = () => {
  return (
    <>
      <div div className="bg-gradient-to-r from-purple-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header and Breadcrumb */}
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-lg">
              <span className="text-black">Home</span> /{" "}
              <span className="text-purple-600 font-semibold">Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#f7f9fc] p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-4 rounded-lg shadow-lg">
              <i className="fas fa-phone text-white"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Call Us Anytime
              </h3>
              <p className="text-gray-500">+91 000 000 000</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f7f9fc] p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-4 rounded-lg shadow-lg">
              <i className="fas fa-envelope text-white"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Email Address</h3>
              <p className="text-gray-500">info@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f7f9fc] p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-4 rounded-lg shadow-lg">
              <svg
                className="text-white w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Office Location
              </h3>
              <p className="text-gray-500">Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#f7f9fc] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have Any Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Enthusiastically disintermediate one-to-one leadership via
              business e-commerce. Dramatically reintermediate compelling
              process improvements rather than empowered relationships.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 pr-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {/* Example email icon (adjust if needed) */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.94 6.94a.75.75 0 0 1 1.06 0L10 12.94l5.94-6a.75.75 0 0 1 1.06 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-6.5-6.5a.75.75 0 0 1 0-1.06z" />
                  </svg>
                </div>
              </div>

              {/* Phone Input with Flag Icon */}
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-white border border-r-0 border-gray-300 rounded-l">
                  IND
                </span>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full p-3 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition"
              >
                SEND →
              </button>
            </form>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <img
              src="https://stard.vercel.app/assets/Service%20_24_7-amico-Se1BOFn9.svg" // Replace with actual image path
              alt="Support Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
        <Chatbot />
      </section>
    </>
  );
};

export default Aus;
