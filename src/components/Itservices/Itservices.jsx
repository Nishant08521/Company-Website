import React from "react";
import { motion } from "framer-motion";
const Itservices = () => {
  return (
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* <!-- Left Content --> */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          class="lg:w-1/2 ml-10"
        >
          <h4 class="text-violet-600 font-semibold uppercase tracking-wide mb-2 flex items-center gap-2">
            <svg
              class="w-5 h-5 text-violet-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L15.09 8H24L17.45 13.09L20.54 21L12 16L3.46 21L6.55 13.09L0 8H8.91L12 0Z" />
            </svg>
            Why Choose Us
          </h4>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            We Deal With The Aspects <br />
            Professional <span class="text-violet-600">IT Services</span>
          </h2>
          <p class="text-gray-600 mb-6">
            Collaboratively envisage user-friendly supply chains and cross-unit
            imperative. Authoritatively fabricate competitive resources and
            holistic.
          </p>

          {/* <!-- Features --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-center gap-2">
              <span class="text-violet-600">✓</span>
              <span class="font-semibold text-gray-900">
                High Quality Security
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-violet-600">✓</span>
              <span class="font-semibold text-gray-900">
                Expert Team Members
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-violet-600">✓</span>
              <span class="font-semibold text-gray-900">24/7 Support</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-violet-600">✓</span>
              <span class="font-semibold text-gray-900">Fast Delivery</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-violet-600">✓</span>
              <span class="font-semibold text-gray-900">Easy Solutions</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-violet-600">✓</span>
              <span class="font-semibold text-gray-900">24/7 Expert Team</span>
            </div>
          </div>
        </motion.div>

        {/* <!-- Right Image --> */}
        <div class="lg:w-1/2 relative">
          <div class="relative w-full max-w-md mx-auto overflow-hidden rounded-full border-8 border-white shadow-lg">
            <img
              src="https://stard.vercel.app/assets/choose-us-DndBlBPW.png"
              alt="Team Working"
              class="w-full object-cover"
            />
            <button class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <svg
                  class="w-6 h-6 text-violet-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itservices;
