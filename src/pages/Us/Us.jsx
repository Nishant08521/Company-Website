import React from "react";
import Chatbot from "../../components/Chatbot/Chatbot";
const Aboutus = () => {
  return (
    <section class="bg-gradient-to-r from-[#f7f8ff] to-[#f7f8ff] py-16 px-8">
      <div class="max-w-7xl mx-auto">
        {/* <!-- Breadcrumb --> */}
        <div class="text-sm text-right mb-8">
          <a href="/" class="text-gray-600 hover:text-indigo-500">
            Home
          </a>
          <span class="mx-1">/</span>
          <span class="text-indigo-600 font-medium">About Us</span>
        </div>

        <h2 class="text-3xl font-bold text-gray-800 mb-12">About Us</h2>

        <div class="flex flex-col lg:flex-row items-center gap-12">
          {/* <!-- Image Section --> */}
          <div class="relative max-w-sm">
            <img
              src="https://stard.vercel.app/assets/1-D-9aTnNu.png"
              alt="Smiling Woman"
              class="rounded-lg z-10 relative"
            />
            {/* <!-- Shapes --> */}
            {/* <div class="absolute bottom-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-indigo-500"></div>
            <div class="absolute top-1/2 right-0 w-0 h-0 border-l-[50px] border-l-yellow-400 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div> */}
          </div>

          {/* <!-- Text Section --> */}
          <div class="max-w-2xl">
            <div class="flex items-center gap-2 text-purple-600 font-semibold mb-2">
              <svg
                class="w-5 h-5 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 00-5.293 13.707l-1.414 1.414A10 10 0 1110 0v2z"></path>
              </svg>
              <span>Who We Are</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
              We Are Increasing Business Success With Development{" "}
              <span class="text-indigo-600">IT Solution</span>
            </h3>
            <p class="text-gray-600 mb-6">
              Collaboratively envision user friendly supply chains and cross
              unit imperative. Authoritatively fabricate competitive resource
              and holistic synergy. Uniquely generate efficient schemas before
              future.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div class="flex items-start gap-3">
                <img
                  src="https://stard.vercel.app/assets/about_feature-DyC4EWrj.svg"
                  alt=""
                />
                <div>
                  <p class="font-semibold text-gray-800">Certified Company</p>
                  <p class="text-gray-500">Best Provide Skills Services</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <img
                  src="https://stard.vercel.app/assets/about_feature_1svg-e4ybenqu.svg"
                  alt=""
                />
                <div>
                  <p class="font-semibold text-gray-800">Expert Team</p>
                  <p class="text-gray-500">100% Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Benefits of Working with <span className="text-[#7b61ff]">Stard</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#7b61ff] mb-4">
              <img
                src="https://www.svgrepo.com/show/530572/accelerate.svg"
                alt="Kick Start"
                className="w-12 h-12 text-[#7b61ff]"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kick Start</h3>
            <p className="text-gray-600">
              Our teams can be ramped up quickly and managed autonomously to
              implement and execute agreed plans.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#7b61ff] mb-4">
              <img
                src="https://www.svgrepo.com/show/530444/availability.svg"
                alt="Top Quality Engineers"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Top Quality Engineers
            </h3>
            <p className="text-gray-600">
              Our hiring process is constantly active to ensure your access to
              the best IT professionals in the market.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#7b61ff] mb-4">
              <img
                src="https://www.svgrepo.com/show/530652/clock.svg"
                alt="End to End Management"
                className="w-12 h-12 text-white"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              End to End Management
            </h3>
            <p className="text-gray-600">
              We are responsible for your project completion and team management
              from start to end, guaranteeing quality product output.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#7b61ff] mb-4">
              <img
                src="https://www.svgrepo.com/show/530454/system-settings.svg"
                alt="Operational Efficiency"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Operational Efficiency
            </h3>
            <p className="text-gray-600">
              Our cost effective services help reduce your costs to remain
              competitive without compromising quality.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-16 px-4 md:px-10">
        {/* Left Side Text */}
        <div className="border-r-4 border-[#7b61ff] pl-6 ">
          <div className="flex items-center gap-2 mb-2 mt-25">
            <svg
              className="w-6 h-6 text-[#7b61ff]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            <span className="text-[#7b61ff] font-semibold uppercase text-sm   ">
              Contact with us!
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Any Questions?
          </h2>
          <p className="text-gray-600 mb-40">
            Enthusiastically disintermediate one-to-one leadership via business
            e-commerce. Dramatically reintermediate compelling process
            improvements rather than empowered relationships.
          </p>
        </div>

        {/* Right Side Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
          />
          <div className="flex">
            <select className="border border-gray-300 rounded-l-md px-2 bg-white">
              <option value="+880">IND +91</option>
              <option value="+91">BD +880</option>
              <option value="+1">🇺🇸 +1</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#7b61ff] hover:bg-[#684de5] text-white font-semibold py-3 rounded-md transition-all"
          >
            SEND →
          </button>
        </form>
      </div>
      <Chatbot />
    </section>
  );
};

export default Aboutus;
