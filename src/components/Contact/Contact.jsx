import React from "react";
import bgImage from "../../assets/bg.jpg";

const Contact = () => {
  return (
    <section class="relative h-[500px] w-full text-white overflow-hidden">
      {/* <!-- Background image --> */}
      <div
        class="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* <!-- Dark overlay --> */}
      <div class="absolute inset-0 bg-black opacity-60"></div>

      {/* <!-- Left purple diamond --> */}
      <div class="absolute inset-y-0 left-0 w-1/3 bg-violet-600 opacity-70 transform -skew-x-12 origin-left"></div>

      {/* <!-- Right purple diamond --> */}
      <div class="absolute inset-y-0 right-0 w-1/3 bg-violet-600 opacity-70 transform skew-x-12 origin-right"></div>

      {/* <!-- Content --> */}
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
        <div class="flex items-center gap-2 text-purple-400 font-semibold mb-4 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
          CONTACT US
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">
          We are here to help you 24/7
        </h1>
        <p class="text-purple-500 text-4xl mb-6">Reach Out To Us Anytime!</p>
        <button class="bg-violet-600  text-white px-6 py-3 font-semibold rounded-md shadow inline-flex items-center gap-2 hover:bg-violet-700 transition">
          <a href="/contactus">
            <span>GET IN TOUCH</span>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Contact;
