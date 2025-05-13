import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div class="bg-gray-50 p-6 md:p-12 font-sans">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* <!-- Left: Image & Badge --> */}

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          class="relative"
        >
          {/* <img src="your-image.jpg" alt="Team working" class="rounded-xl shadow-md"> */}
          <img
            src="https://stard.vercel.app/assets/about_1_1-CtGpwPqt.png"
            alt=""
          />
          <div className="absolute bottom-12 right-25 bg-violet-600 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg border-4 border-white">
            <span className="text-4xl font-bold">5</span>
            <span className="text-sm mt-1">Years Experience</span>
          </div>
        </motion.div>

        {/* <!-- Right: Text Content --> */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          class="space-y-6"
        >
          <div class="text-violet-600 font-semibold flex items-center gap-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            ABOUT OUR COMPANY
          </div>
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Stard Tech – Your Trusted Software Development
            <span class="text-violet-600">Partner</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We are a team of enthusiastic web specialists with a clear mission:
            to help businesses succeed through smart technology. We don’t just
            build websites and apps; we create innovative solutions that help
            you reach your goals and grow. With our dedication and expertise, we
            make sure you stay ahead in a fast-changing digital world.
          </p>
          <ul class="space-y-3 text-md text-gray-800 font-semibold">
            <li class="flex items-start gap-2">
              <span className="text-violet-600 mt-1">✔</span> Dramatically
              re-engineer value added IT systems via mission
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-600 mt-1">✔</span> Website & Mobile
              application design & Development
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-600 mt-1">✔</span> Professional User
              Experience & Interface researching
            </li>
          </ul>
          <div class="flex flex-col md:flex-row md:items-center gap-4 pt-4">
            <a
              href="/us"
              class="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              DISCOVER MORE →
            </a>
            <div class="flex items-center gap-3">
              <div class="bg-violet-100 text-violet-600 p-4 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.94.33 1.86.63 2.75a2 2 0 0 1-.45 2.11L10.09 11a16 16 0 0 0 6.91 6.91l1.42-1.42a2 2 0 0 1 2.11-.45c.89.3 1.81.51 2.75.63a2 2 0 0 1 1.72 2z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-600">Call On Us:</div>
                <div class="text-lg font-bold text-gray-800">+9100000000</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
