import React from "react";

const Work = () => {
  return (
    <section class="py-16  bg-white relative overflow-hidden ">
      {/* <!-- Header --> */}
      <div class="text-center mb-12">
        <div class="flex justify-center items-center gap-2 text-violet-600 font-semibold text-lg">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          WORK PROCESS
        </div>
        <h2 class="text-4xl font-extrabold text-gray-900 mt-2">
          How To Work It!
        </h2>
      </div>

      {/* <!-- Work Process Steps --> */}
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 ">
        {/* <!-- Step 1 --> */}
        <div class="group bg-white hover:bg-violet-600 transition-colors duration-300 p-6  rounded-xl shadow-md text-center">
          <img
            src="https://stard.vercel.app/assets/process_box_1-Dbuvxvq6.png"
            alt="Select a project"
            class="mx-auto h-16 mb-4"
          />
          <h3 class="text-xl text-black group-hover:text-white font-bold mb-2">
            Select a project
          </h3>
          <p class="text-black text-sm group-hover:text-white">
            Continua scale empowered metrics with cost effective innovation.
          </p>
        </div>

        {/* <!-- Step 2 --> */}
        <div class="group bg-white hover:bg-violet-600 transition-colors duration-300 p-6 rounded-xl shadow-md text-center">
          <img
            src="https://stard.vercel.app/assets/process_box_2-Cd24_UYH.png"
            alt="Project analysis"
            class="mx-auto h-16 mb-4"
          />
          <h3 class="text-xl text-black group-hover:text-white font-bold mb-2">
            Project analysis
          </h3>
          <p class="text-black text-sm group-hover:text-white">
            Continua scale empowered metrics with cost effective innovation.
          </p>
        </div>

        {/* <!-- Step 3 --> */}
        <div class="group bg-white hover:bg-violet-600 transition-colors duration-300 p-6 rounded-xl shadow-md text-center">
          <img
            src="https://stard.vercel.app/assets/process_box_3-DSvQqmBP.png"
            alt="Plan Execute"
            class="mx-auto h-16 mb-4"
          />
          <h3 class="text-xl text-black font-bold mb-2 group-hover:text-white">
            Plan Execute
          </h3>
          <p class="text-black text-sm group-hover:text-white">
            Continua scale empowered metrics with cost effective innovation.
          </p>
        </div>

        {/* <!-- Step 4 (Highlighted) --> */}
        <div class=" group hover:bg-violet-600 transition-colors text-white duration-300 p-6 rounded-xl shadow-md text-center cursor-pointer">
          <img
            src="https://stard.vercel.app/assets/process_box_4-BAn1FNHE.png"
            alt=""
            class="mx-auto h-16 mb-4"
          />

          <h3 class="text-xl text-black font-bold mb-2 group-hover:text-white ">
            Deliver result
          </h3>
          <p class="text-sm text-black group-hover:text-white">
            Continua scale empowered metrics with cost effective innovation.
          </p>
        </div>
      </div>

      {/* <!-- Dotted Line --> */}
      <svg
        class="absolute top-1/2 left-0 w-full -z-10"
        height="100"
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 50 Q300 0 600 50 T1200 50"
          stroke="#A78BFA"
          stroke-dasharray="8 8"
          fill="transparent"
        />
      </svg>
    </section>
  );
};

export default Work;
